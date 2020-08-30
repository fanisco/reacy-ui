import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {IRootState} from '../types/IRootState';

export const submitCalcForm = (data: any): ThunkAction<void, IRootState, unknown, Action<any>> => {
  return async dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post'
    }).then(response => response.json())/*.then(json => dispatch())*/;
  }
};
