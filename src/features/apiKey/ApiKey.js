import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withLabel from '../../common/hocs/withLabel';
import Input from '../../common/components/input/Input';
import Button from '../../common/components/button/Button';
import octokitRequest, { REPOS_LIST_ENDPOINT } from '../../common/services/octokitRequest';
import { addApiKey } from './ApiKeyActions';
import { addRepoList } from '../repositories/RepositoriesActions';
import './ApiKey.scss';

const WithLabelInput = withLabel(Input);

const ApiKey = () => {
  const [apiKeyInput, setApiKeyInput] = useState('489cdcdc66eef17209e7ed3856d39f9a3821bba1');
  const [isFetchRequest, setIsFetchRequest] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  
  const onInputChange = useCallback((e) => {
    setApiKeyInput(e.target.value);
  }, [setApiKeyInput]);

  const onButtonClick = useCallback(() => {
    setIsFetchRequest(true);

    const fetchData = async () => {
      const response = await octokitRequest(apiKeyInput, REPOS_LIST_ENDPOINT);

      if (response.status === 200) {
        setIsAuthenticated(true);
        dispatch(addApiKey(apiKeyInput));
        dispatch(addRepoList(response.data));
      }

      setIsFetchRequest(false);
    };

    fetchData();
  }, [apiKeyInput, dispatch]);

  useEffect(() => {
    if(isAuthenticated) {
      history.push('/repos');
    }
  }, [isAuthenticated, history]);

  return (
    <div className='center-wrap'>
      <WithLabelInput value={apiKeyInput} onChange={onInputChange} label='GitHub Personal Access Token' />
      <Button disabled={isFetchRequest} onClick={onButtonClick} text='OK' />
    </div>
  );
};

export default ApiKey;