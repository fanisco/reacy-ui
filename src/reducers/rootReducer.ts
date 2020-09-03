import {combineReducers} from 'redux';
import {IRootState} from '../types/IRootState';
import {usersReducer} from './usersReducer';
import {postsReducer} from './postsReducer';
import {commentsReducer} from './commentsReducer';

// FixMe: any, any
export const rootReducer = combineReducers<any, any>({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});
