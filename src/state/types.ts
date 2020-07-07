import IComment from '../core/interface/IComment';
import IAuthor from '../core/interface/IAuthor';

export type State = {
  comments: {
    list: IComment[];
    meta: {
      authors: IAuthor[];
    }
  };
  settings: any;
  contextCommentId?: number;
}

export type Action = {
  type: string,
  [x: string]: any;
};

export type Dispatch = () => undefined;
