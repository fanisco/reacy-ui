import {Reducer} from 'react';
import {State, Action} from './types';

export const reducer: Reducer<State, Action> = (state, {type, payload}) => {
  switch(type) {
    case 'ADD_COMMENT':
      const comments = state.comments;
      comments.list.push({
        id: (new Date()).getTime(),
        ...payload
      });
      return {...state, comments};
    case 'SET_SETTINGS':
      return {...state, settings: {...state.settings, [payload.name]: payload.value}};
    default:
      return state;
  }
};
