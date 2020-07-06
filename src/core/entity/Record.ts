import IRecord from '../interface/IRecord';
import IList from '../interface/IList';

/**
 * Class to present data.
 */
export default class Record implements IRecord {
  id: number;
  owner?: IList;
  constructor({id}: IRecord) {
    this.id = id;
  }
}
