import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import logger from 'redux-logger';
import reducer from '../reducer/reducer.js';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware)
)
 

export default store;