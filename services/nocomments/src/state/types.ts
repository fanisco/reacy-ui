import IComment from '../core/interface/IComment';
import IPerson from '../core/interface/IPerson';

export type State = {
  comments: {
    list: IComment[];
    meta: {
      authors: IPerson[];
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
