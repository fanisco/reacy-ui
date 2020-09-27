import {
  FETCH_USERS,
  SET_CURRENT_USER,
  UsersActions
} from '../types/UsersActions';
import {IStateUsers} from '../types/IRootState';

const initialState: IStateUsers = {
  list: []
};

export const usersReducer = (state = initialState, {type, payload}: UsersActions) => {
  switch (type) {
    case FETCH_USERS:
      return {...state, list: payload};
    case SET_CURRENT_USER:
      return {...state, user: payload};
    default: return state;
  }
};
