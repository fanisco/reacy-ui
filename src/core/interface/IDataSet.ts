import IList from './IList';
import IMeta from './IMeta';

export default interface IDataSet {
  records?: IList,
  meta?: IMeta
}

export interface IUnmarkedDataSet {
  rec?: Array<any>
  meta?: any
}
