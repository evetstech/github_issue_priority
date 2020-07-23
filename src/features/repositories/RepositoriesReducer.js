import { Map, List, fromJS } from 'immutable';
import { ADD_REPO_LIST } from './RepositoriesActions';

export const initialState = Map({
  repos: List()
});

const RepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPO_LIST:
      return state.setIn(['repos'], fromJS(action.repoList));
    default: return state;
  };
};

export default RepositoriesReducer;