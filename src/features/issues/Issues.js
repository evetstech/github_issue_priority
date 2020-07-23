import React, { useCallback, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { insertUpdateRepoIssues } from './IssuesActions';
import { getSelectedRepo } from './IssuesSelectors';
import useFetch from '../../common/hooks/useFetch';
import { getIssuesEndpoint } from '../../common/services/octokitRequest';
import { convertDate } from '../../common/services/convertDate';
import Repositories from '../repositories/Repositories';
import Table from '../../common/components/table/Table';
import './Issues.scss';

const columns = [
  {
    Header: '',
    accessor: 'avatar',
    // requirements of avatar being 40x40
    Cell: ({ cell: { value } }) => <img src={value} alt={value} width='40px' height='40px' />
  },
  {
    Header: 'Title',
    accessor: 'title'
  },
  {
    Header: 'Date Created',
    accessor: 'date',
    Cell: ({ cell: { value } }) => <div style={{ left: '50%' }}>{value}</div>
  },
  {
    Header: 'Last Updated',
    accessor: 'updated'
  }
];

// default avatar icon is github icon
const createTableData = (data = []) => {
  return data.map(row => {
    return {
      idx: row.getIn(['title']),
      avatar: row.getIn(['assignee']) ? row.getIn(['assignee', 'avatar_url']) : 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      title: row.getIn(['title']),
      date: convertDate(row.getIn(['created_at'])),
      updated: convertDate(row.getIn(['updated_at']))
    };
  });
};

//add cache cache busting
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
    console.log(newData);
    dispatch(insertUpdateRepoIssues(selectedRepo, newData));

  };

  if (!selectedRepo || !authKey) {
    return <Redirect to='/' />
  }

  return (
    <div className='issues-wrap'>
      <div className='repo'>
        <Repositories type='column' selected={selectedRepo} />
      </div>
      <div style={{ width: '50%', marginLeft: '10%' }}>
        <h2>Issues</h2>
        <Table data={issuesData} columns={columns} reorderData={reorderData} />
      </div>
    </div>
  );
};

export default Issues;