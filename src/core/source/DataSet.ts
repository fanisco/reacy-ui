import List from '../collection/List';
import {IDataSet, IUnmarkedDataSet} from '../interface/IDataSet';
import IList from '../interface/IList';

/**
 * Set of data wich contain a list of records and meta data.
 */
export default class DataSet implements IDataSet {
  records: IList;
  meta: unknown;

  /**
   * @param {IUnmarkedDataSet} dataSet Set of raw data.
   * @param {IRecord} model Determine type of main list.
   */
  constructor(dataSet: IUnmarkedDataSet, model: any) {
    if (dataSet.meta !== undefined) {
      this.meta = {...dataSet.meta};
    }
    this.records = List.fromArray(dataSet.rec, this.meta, model);
  }

  unload(): IUnmarkedDataSet {
    const u = {
      rec: this.records.map(record => record),
      meta: {}
    };
    console.log(this.records, u);
    return u;
  };

}
