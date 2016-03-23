import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

<<<<<<< HEAD
import { filter } from './books.js';
=======
import { todos, filter } from './todos.js';
import { books } from './books';
>>>>>>> cb4bda870a0dd10d25a56890a66317efe4e81db1

const rootReducer = combineReducers({
  filter,
  books,
  routing: routerReducer
});

export default rootReducer;
