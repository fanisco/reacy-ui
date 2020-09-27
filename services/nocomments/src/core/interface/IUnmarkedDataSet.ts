import IData from './IData';

export interface IUnmarkedDataSet {
  list: Array<IData<any>>;
  meta?: IData<Array<IData<any>>>;
}
