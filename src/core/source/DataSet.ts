import List from '../collection/List';
import CommentList from '../collection/CommentList';
import Meta from '../entity/Meta';
import IDataSet, { IUnmarkedDataSet } from '../interface/IDataSet';
import IList from '../interface/IList';

/**
 * Class to present a set of data wich may contain a list of records and meta data.
 */
export default class DataSet implements IDataSet {
  records: IList;
  meta?: Meta;

  /**
   * @param {IUnmarkedDataSet} dataSet Set of raw data.
   * @param {string} listType Determine type of main list.
   */
  constructor(dataSet: IUnmarkedDataSet, listType?: string) {
    if (dataSet.meta !== undefined) {
      this.meta = new Meta(dataSet.meta)
    }
    switch (listType) {
      case 'comments':
        this.records = new CommentList(CommentList.toRecords(dataSet.rec, this.meta), this.meta);
        break;
      case 'list':
      default:
        this.records = new List(List.toRecords(dataSet.rec, this.meta), this.meta)
    }
  }
}
