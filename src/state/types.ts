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
}

export type Action = {
  type: string,
  [x: string]: any;
};
