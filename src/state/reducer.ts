import {Reducer} from 'react';
import {State, Action} from './types';
import {
  SET_CURRENT_USER,
  FETCH_USERS,
  SATURATE_USERS
} from '../types/Actions';

export const reducer: Reducer<State, Action> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {...state, user: payload.user};
    case FETCH_USERS:
      return {...state, users: payload.data};
    default:
      return state;
  }
};
