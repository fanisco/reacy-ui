import {IDataSet, IUnmarkedDataSet} from '../core/interface/IDataSet';

export type State = {
  comments: IDataSet;
  settings: any;
}

export type RawStateData = {
  comments: IUnmarkedDataSet;
  settings: any;
}

export type Action = {
  type: string,
  [x: string]: any;
};
