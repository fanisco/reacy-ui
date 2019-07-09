import List from '../collection/List';
import CommentList from '../collection/CommentList';
import Meta from '../entity/Meta';
import IDataSet, { IUnmarkedDataSet } from '../interface/IDataSet';

/**
 * Class to present a set of data wich may contain a list of records and meta data.
 */
export default class DataSet implements IDataSet {
  records?: List;
  meta?: Meta;

  /**
   * @param {IUnmarkedDataSet} dataSet Set of raw data.
   * @param {string} listType Determine type of main list.
   */
  constructor(dataSet: IUnmarkedDataSet, listType?: string) {
    if (dataSet.meta !== undefined) {
      this.meta = new Meta(dataSet.meta)
    }
    if (dataSet.rec !== undefined) {
      switch (listType) {
        case 'comments':
          this.records = new CommentList(dataSet.rec, this.meta );
          break;
        case 'list':
        default:
          this.records = new List(dataSet.rec, this.meta )
      }
    }
  }
}
