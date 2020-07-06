import {Reducer} from 'react';
import {State, Action} from './types';

export const reducer: Reducer<State, Action> = (state, {type, payload}) => {
  switch(type) {
    case 'ADD_COMMENT':
      return {...state};
    case 'SET_SETTINGS':
      return {...state, settings: {...state.settings, [payload.name]: payload.value}};
    default:
      return state;
  }
};
