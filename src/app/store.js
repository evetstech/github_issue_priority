import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ApiKeyReducer from '../features/apiKey/ApiKeyReducer';
import RepositoriesReducer from '../features/repositories/RepositoriesReducer';
import IssuesReducer from '../features/issues/IssuesReducer';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  apiKey: ApiKeyReducer,
  repositories: RepositoriesReducer,
  issues: IssuesReducer
});

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'primary',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: []
});

export const persistor = persistStore(store);
export default store;