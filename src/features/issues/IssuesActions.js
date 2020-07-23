export const UPDATE_SELECTED_REPO = 'UPDATE_SELECTED_REPO';
export const INSERT_UPDATE_REPO_ISSUES = 'INSERT_UPDATE_REPO_ISSUES';

export const updateSelectedRepo = (repoId) => {
  return {
    type: UPDATE_SELECTED_REPO,
    repoId
  };
};

export const insertUpdateRepoIssues = (repoId, issues) => {
  console.log(repoId, issues);
  return {
    type: INSERT_UPDATE_REPO_ISSUES,
    repoId,
    issues,
  };
};