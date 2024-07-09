// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from '../redux/rootReducer'; // Adjust path as necessary

const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const middleware = [thunk, loggerMiddleware, localStorageMiddleware];

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const rootReducerCombined = combineReducers({
  rootReducer,
  // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducerCombined,
  preloadedState: persistedState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
