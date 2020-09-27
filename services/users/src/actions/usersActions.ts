import {ThunkAction} from 'redux-thunk';
import {IRootState} from '../types/IRootState';
import {
  FETCH_USERS,
  SET_CURRENT_USER,
  IFetchUsersAction,
  ISetCurrentUserAction
} from '../types/UsersActions';

export const fetchUsers = (data: any): ThunkAction<void, IRootState, unknown, IFetchUsersAction> => {
  return async dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch({type: FETCH_USERS, payload: json}));
  }
};

export const setCurrentUser = (data: any): ISetCurrentUserAction => {
  return {
    type: SET_CURRENT_USER,
    payload: data
  };
};
