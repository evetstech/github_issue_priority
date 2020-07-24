import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListView from '../../common/components/listview/ListView';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { updateSelectedRepo } from '../issues/IssuesActions';
import './Repositories.scss';

//forks, stars, user, description
const Repositories = (props) => {
  const { type = 'full', selected } = props;
  const repos = useSelector(state => state.persistedReducer.repositories.getIn(['repos']));
  const dispatch = useDispatch();
  const location = useLocation();
  let history = useHistory();

  const listRepos = useMemo(() => {
    const list = [];
    repos.forEach(repo => {
      list.push(repo.toJS());
    });

    return list;
  }, [repos]);

  const onItemClick = useCallback((val) => {
    if (location.pathname !== '/issues') {
      history.push('/issues');
    }

    dispatch(updateSelectedRepo(val.full_name));
  }, [dispatch, history, location]);

  if (!repos) {
    return <Redirect to='/' />
  }

  return (
    <div className={'repo-wrap-' + type}>
      <ListView type={type} header={'Repositories'} selected={selected} onClick={onItemClick} items={listRepos} />
    </div >
  );
};

export default Repositories;