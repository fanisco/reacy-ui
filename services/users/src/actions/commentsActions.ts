import {ThunkAction} from 'redux-thunk';
import {IRootState} from '../types/IRootState';
import {
  FETCH_COMMENTS,
  POST_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  IFetchCommentsAction,
  IPostCommentAction,
  IEditCommentAction,
  IDeleteCommentAction
} from '../types/CommentsActions';
import {IComment} from '../types/IComment';

export const fetchComments = (postId: number): ThunkAction<void, IRootState, unknown, IFetchCommentsAction> => {
  return async dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(json => dispatch({type: FETCH_COMMENTS, payload: json}));
  }
};

export const postComment = (comment: IComment): ThunkAction<void, IRootState, unknown, IPostCommentAction> => {
  return async dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`, {
      method: 'post',
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(json => {
        if (json.id) {
          console.log('posted');
          dispatch({type: POST_COMMENT, payload: comment});
        }
      });
  }
};

export const editComment = (comment: IComment): IEditCommentAction => {
  return {
    type: EDIT_COMMENT,
    payload: comment
  };
};

export const deleteComment = (commentId: number): IDeleteCommentAction => {
  return {
    type: DELETE_COMMENT,
    payload: commentId
  }
};
