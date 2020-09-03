import {IUser} from './IUser';
import {IPost} from './IPost';
import {IComment} from './IComment';

export interface IStateUsers {
  list: IUser[];
  user?: IUser;
}

export interface IStatePosts {
  list: IPost[];
  post?: IPost;
}

export interface IStateComments {
  list: IComment[];
}

export interface IRootState {
  users: IStateUsers;
  posts: IStatePosts;
  comments: IStateComments;
}
