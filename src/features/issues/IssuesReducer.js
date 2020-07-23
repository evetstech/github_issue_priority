import { Map, fromJS } from 'immutable';
import { UPDATE_SELECTED_REPO, INSERT_UPDATE_REPO_ISSUES } from './IssuesActions';

export const initialState = Map({
  selectedRepo: null
});

const IssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_REPO:
      return state.setIn(['selectedRepo'], action.repoId);
    case INSERT_UPDATE_REPO_ISSUES:
      return state.setIn([action.repoId], fromJS(action.issues));
    default: return state;
  };
};

export default IssuesReducer;