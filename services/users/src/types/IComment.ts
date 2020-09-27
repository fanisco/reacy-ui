import { IUser } from './IUser';

export interface IComment {
  postId: number;
  id: number;
  name: string;
  body: string;
  user: IUser
}
