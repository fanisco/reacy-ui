import {IUser} from '../types/IUser';

export type State = {
  user?: IUser;
}

export type Action = {
  type: string;
  [x: string]: any;
};

export type Dispatch = () => undefined;
