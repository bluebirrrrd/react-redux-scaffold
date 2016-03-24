import { ADD_TODO, TOGGLE_CHECKED, DELETE_TODO, SET_FILTER, CLEAR_TODO,
         LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, LOAD_BOOKS_REQUEST,
         LOAD_AUTHORS_SUCCESS, LOAD_AUTHORS_FAILURE, LOAD_AUTHORS_REQUEST } from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text,
      completed: false
    }
  };
}

export function toggleChecked(index) {
  return {
    type: TOGGLE_CHECKED,
    payload: {
      index
    }
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    payload: {
      index
    }
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
}

export function clearTodo() {
  return {
    type: CLEAR_TODO
  };
}

export function loadBooksSuccess(json) {
  return {
    type: LOAD_BOOKS_SUCCESS,
    payload: json
  };
}

export function loadBooksFailure(json) {
  return {
    type: LOAD_BOOKS_FAILURE,
    error: json
  };
}

export function loadBooksRequest() {
  return {
    type: LOAD_BOOKS_REQUEST
  };
}

export function loadAuthorsSuccess(json) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    payload: json
  };
}

export function loadAuthorsFailure(json) {
  return {
    type: LOAD_AUTHORS_FAILURE,
    error: json
  };
}

export function loadAuthorsRequest() {
  return {
    type: LOAD_AUTHORS_REQUEST
  };
}
