import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import combineReducers from '../reducers';

const middleware = applyMiddleware(thunk, promise);

export default function configureStore(initState) {
  const store = createStore(combineReducers, initState, middleware);
  return store;
}