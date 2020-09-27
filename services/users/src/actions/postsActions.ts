import {ThunkAction} from 'redux-thunk';
import {IRootState} from '../types/IRootState';
import {
  FETCH_POSTS,
  FETCH_POST,
  IFetchPostsAction,
  IFetchPostAction
} from '../types/PostsActions';

export const fetchPosts = (userId: number): ThunkAction<void, IRootState, unknown, IFetchPostsAction> => {
  return async dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(json => dispatch({type: FETCH_POSTS, payload: json}));
  }
};

export const fetchPost = (postId: number): ThunkAction<void, IRootState, unknown, IFetchPostAction> => {
  return async dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(json => dispatch({type: FETCH_POST, payload: json}));
  }
};
