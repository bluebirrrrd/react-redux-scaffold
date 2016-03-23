import { ADD_TODO, TOGGLE_CHECKED, DELETE_TODO, SET_FILTER, CLEAR_TODO,
         LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, LOAD_BOOKS_REQUEST } from '../constants/ActionTypes';



export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
    meta: name
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
