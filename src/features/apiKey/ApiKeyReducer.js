import { ADD_API_KEY } from './ApiKeyActions';
import { Map } from 'immutable';

export const initialState = Map({
  key: null
});

const ApiKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    //normally we would never store an api token on the client, but since we don't have a backend to handle it for us,
    //this will have to do
    case ADD_API_KEY: 
    console.log(state);

      const newState =  state.setIn(['key'], action.apiKey);
      return newState;
    default: return state;
  };
};

export default ApiKeyReducer;