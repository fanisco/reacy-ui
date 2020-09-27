import {combineReducers} from 'redux';
import {IRootState} from '../types/IRootState';
import {calcFormReducer} from './calcFormReducer';

export const rootReducer = combineReducers<IRootState>({
  calcForm: calcFormReducer
});
