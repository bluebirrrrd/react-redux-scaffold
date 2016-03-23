import { List } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = List([]);

export function filter(state = 'show_all', action = null) {
  const { type, payload, meta } = action;
  switch (type) {
    case ActionTypes.SET_FILTER:
        return {payload: payload, meta: meta};
    default:
      return state;
  }
}
