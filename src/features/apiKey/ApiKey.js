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
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [isFetchRequest, setIsFetchRequest] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const onInputChange = useCallback((e) => {
    setApiKeyInput(e.target.value);
  }, [setApiKeyInput]);

  const handleRequest = useCallback(() => {
    setIsFetchRequest(true);

    const fetchData = async () => {
      const response = await octokitRequest(apiKeyInput, REPOS_LIST_ENDPOINT);

      if (response.status === 200) {
        setIsAuthenticated(true);
        dispatch(addApiKey(apiKeyInput));
        dispatch(addRepoList(response.data));
        return;
      }

      if (response.error) {
        setErrorMessage(response.error);
      }

      setIsFetchRequest(false);
    };

    fetchData();
  }, [apiKeyInput, dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/repos');
    }
  }, [isAuthenticated, history]);

  return (
    <div>
      <div className='center-wrap'>
        <WithLabelInput value={apiKeyInput} onChange={onInputChange} handleEnter={handleRequest} label='GitHub Personal Access Token' />
        <Button disabled={isFetchRequest} onClick={handleRequest} text='OK' />
        {errorMessage && <div className='apiError'>{errorMessage}</div>}
      </div>
    </div>

  );
};

export default ApiKey;