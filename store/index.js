import { createStore } from 'redux';
import * as reducer from '../components/reducer.js';

import { combineReducers } from 'redux';

export function composeReducers(reducers = {}) {
    return combineReducers({ ...reducers });
}


export const store = createStore(
    composeReducers(reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
