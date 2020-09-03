import {
  FETCH_COMMENTS,
  POST_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  CommentsActions
} from '../types/CommentsActions';
import {IStateComments} from '../types/IRootState';
import { IComment } from '../types/IComment';

const initialState: IStateComments = {
  list: []
};

export const commentsReducer = (state = initialState, {type, payload}: CommentsActions) => {
  switch (type) {
    case FETCH_COMMENTS:
      return {...state, list: payload};
    case POST_COMMENT:
      return {...state, list: [...state.list, payload]};
    case EDIT_COMMENT: {
      const editComment = (payload as IComment);
      const index = state.list.findIndex(comment => comment.id === editComment.id);
      const list = [...state.list];
      list.splice(index, 1, editComment);
      return {...state, list};
    }
    case DELETE_COMMENT: {
      const index = state.list.findIndex(comment => comment.id === (payload as number));
      const list = [...state.list];
      list.splice(index, 1);
      return {...state, list};
    }
    default: return state;
  }
};
