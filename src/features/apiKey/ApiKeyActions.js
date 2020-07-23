export const ADD_API_KEY = 'ADD_API_KEY';

export const addApiKey = (apiKey) => {
  return {
    type: ADD_API_KEY,
    apiKey
  };
};