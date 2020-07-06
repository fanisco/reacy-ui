import IList from './IList';
import IData from './IData';

export interface IDataSet {
  records: IList;
  meta?: any;
  unload: () => IUnmarkedDataSet;
}

export interface IUnmarkedDataSet {
  rec: Array<IData>;
  meta?: any;
}
