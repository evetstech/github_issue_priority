import React, { useCallback, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { insertUpdateRepoIssues } from './IssuesActions';
import { getSelectedRepo } from './IssuesSelectors';
import useFetch from '../../common/hooks/useFetch';
import { getIssuesEndpoint } from '../../common/services/octokitRequest';
import { convertDate, timeSince } from '../../common/services/convertDate';
import Repositories from '../repositories/Repositories';
import Table from '../../common/components/table/Table';
import './Issues.scss';

const columns = [
  {
    Header: '',
    accessor: 'avatar',
    // requirements of avatar being 40x40
    Cell: ({ cell: { value } }) => <img src={value.address} title={value.user} alt={value} width='40px' height='40px' />
  },
  {
    Header: 'Title',
    accessor: 'title'
  },
  {
    Header: 'Date Created',
    accessor: 'date'
  },
  {
    Header: 'Last Updated',
    accessor: 'updated'
  }
];

// if not assigned or no avatar, default avatar icon is github icon
const createTableData = (data = []) => {
  return data.map(row => {
    return {
      idx: row.getIn(['title']),
      avatar: {
        address: row.getIn(['assignee']) ? row.getIn(['assignee', 'avatar_url']) : 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        user: row.getIn(['assignee']) ? row.getIn(['assignee', 'login']) : 'Unassigned'
      },
      title: row.getIn(['title']),
      date: convertDate(row.getIn(['created_at'])),
      updated: timeSince(row.getIn(['updated_at']))
    };
  });
};

const Issues = (props) => {
  const selectedRepo = useSelector(getSelectedRepo);
  const authKey = useSelector(state => state.persistedReducer.apiKey.getIn(['key']));
  const issues = useSelector(state => state.persistedReducer.issues.getIn([selectedRepo]));
  const endpoint = selectedRepo ? getIssuesEndpoint(selectedRepo) : null;
  const dispatch = useDispatch();
  const dispatchInsertUpdate = useCallback((val) => {
    if (!issues) {
      dispatch(insertUpdateRepoIssues(selectedRepo, val));
    }
  }, [dispatch, selectedRepo, issues]);

  useFetch(authKey, endpoint, dispatchInsertUpdate);

  const issuesData = useMemo(() => {
    if (issues) {
      return createTableData(issues);
    }
  }, [issues]);

  const reorderData = (startIndex, endIndex) => {
    const newData = [...issues.toJS()];
    const [movedRow] = newData.splice(startIndex, 1);
    newData.splice(endIndex, 0, movedRow);

    dispatch(insertUpdateRepoIssues(selectedRepo, newData));
  };

  if (!selectedRepo || !authKey) {
    return <Redirect to='/' />
  }

  return (
    <div className='issues-top-wrap'>
      <div className='issues-repo-wrap'>
        <Repositories type='column' selected={selectedRepo} />
      </div>
      <div className='issues-col'>
        <h2>Issues</h2>
        <div className='table-wrap'>
          <Table data={issuesData} columns={columns} reorderData={reorderData} />
        </div>
      </div>
    </div>
  );
};

export default Issues;