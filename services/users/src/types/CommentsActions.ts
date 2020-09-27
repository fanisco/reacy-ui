import {IComment} from './IComment';

export const FETCH_COMMENTS = 'COMMENTS/FETCH_COMMENTS';
export const POST_COMMENT = 'COMMENTS/POST_COMMENT';
export const EDIT_COMMENT = 'COMMENTS/EDIT_COMMENT';
export const DELETE_COMMENT = 'COMMENTS/DELETE_COMMENT';

export interface IFetchCommentsAction {
  type: typeof FETCH_COMMENTS;
  payload: IComment[];
}

export interface IPostCommentAction {
  type: typeof POST_COMMENT;
  payload: Partial<IComment>;
}

export interface IEditCommentAction {
  type: typeof EDIT_COMMENT;
  payload: Partial<IComment>;
}

export interface IDeleteCommentAction {
  type: typeof DELETE_COMMENT;
  payload: number;
}

export type CommentsActions =
  IFetchCommentsAction |
  IPostCommentAction |
  IEditCommentAction |
  IDeleteCommentAction;
