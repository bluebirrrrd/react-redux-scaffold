import { List } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialAuthorState = List();

export function authors(state = initialAuthorState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_AUTHORS_REQUEST:
      return state;
    case ActionTypes.LOAD_AUTHORS_SUCCESS:
      return List(payload);
    case ActionTypes.LOAD_AUTHORS_FAILURE:
      return state;
    default:
      return state;
  }
}
