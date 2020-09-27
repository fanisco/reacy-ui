import {
  FETCH_POSTS,
  FETCH_POST,
  PostsActions
} from '../types/PostsActions';
import {IStatePosts} from '../types/IRootState';

const initialState: IStatePosts = {
  list: []
};

export const postsReducer = (state = initialState, {type, payload}: PostsActions) => {
  switch (type) {
    case FETCH_POSTS:
      return {...state, list: payload};
    case FETCH_POST:
      return {...state, post: payload};
    default: return state;
  }
};
