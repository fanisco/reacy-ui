import IList from './IList';
import IMeta from './IMeta';

export interface IDataSet {
  records: IList;
  meta?: IMeta;
  unload: () => IUnmarkedDataSet;
}

export interface IUnmarkedDataSet {
  rec: Array<any>;
  meta?: any;
}
