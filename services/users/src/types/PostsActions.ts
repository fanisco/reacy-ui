import {IPost} from './IPost';

export const FETCH_POSTS = 'POSTS/FETCH_POSTS';
export const FETCH_POST = 'POSTS/FETCH_POST';

export interface IFetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: IPost[];
}

export interface IFetchPostAction {
  type: typeof FETCH_POST;
  payload: IPost;
}

export type PostsActions = IFetchPostsAction | IFetchPostAction;
