import { SET_FILTER } from '../constants/ActionTypes';


export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
    meta: name
  };
}
