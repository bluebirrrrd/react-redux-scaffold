import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos, filter } from './todos.js';
import { books } from './books';
import { authors } from './authors';

const rootReducer = combineReducers({
  books,
  authors,
  todos,
  filter,
  routing: routerReducer
});

export default rootReducer;
