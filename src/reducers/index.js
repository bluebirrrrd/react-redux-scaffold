import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { filter } from './books.js';

const rootReducer = combineReducers({
  filter,
  routing: routerReducer
});

export default rootReducer;
