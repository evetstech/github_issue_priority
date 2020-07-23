import { Octokit } from "@octokit/core";

export const REPOS_LIST_ENDPOINT = '/user/repos';
export const getIssuesEndpoint = (repo) => '/repos/' + repo + '/issues'
export const ERROR_MESSAGES = {
  'Bad credentials': 'The personal access token entered is invalid.',
  'Requires authentication': 'Please enter a personal access token.'
};

const octokitRequest = async (auth, request) => {
  try {
    const octokit = new Octokit({
      auth: auth,
    });

    const response = await octokit.request(request);
    return response;
  }
  catch (exception) {
    return { ...exception, error: ERROR_MESSAGES[exception.message]};
  }
};

export default octokitRequest;