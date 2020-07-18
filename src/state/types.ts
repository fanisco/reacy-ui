import {IUser} from '../types/IUser';

export type State = {
  users: IUser[];
  user?: IUser;
}

export type Action = {
  type: string;
  [x: string]: any;
};

export type Dispatch = () => undefined;
