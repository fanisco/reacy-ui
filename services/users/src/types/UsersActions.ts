import {IUser} from './IUser';

export const FETCH_USERS = 'USERS/FETCH_USERS';
export const SET_CURRENT_USER = 'USERS/SET_CURRENT_USER';
export const SATURATE_USERS = 'USERS/SATURATE_USERS';

export interface IFetchUsersAction {
  type: typeof FETCH_USERS;
  payload: IUser[];
}

export interface ISetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: IUser;
}

export type UsersActions = IFetchUsersAction | ISetCurrentUserAction;
