import {Reducer} from 'react';
import {State, Action} from './types';
import {
  SHOW_USER_CARD,
  HIDE_USER_CARD,
  FETCH_USERS
} from './actions';

export const reducer: Reducer<State, Action> = (state, {type, payload}) => {
  switch (type) {
    case SHOW_USER_CARD:
      return {...state, user: payload.user};
    case HIDE_USER_CARD:
      return {...state, user: undefined};
    case FETCH_USERS:
      return {...state, users: payload.data};
    default:
      return state;
  }
};
