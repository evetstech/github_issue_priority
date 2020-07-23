export const ADD_REPO_LIST = 'ADD_REPO_LIST';

//todo filter down repo info
export const addRepoList = (repoList) => {
  return {
    type: ADD_REPO_LIST,
    repoList
  };
};