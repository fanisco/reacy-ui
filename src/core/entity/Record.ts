import Thing from './Thing';
import IRecord from '../interface/IRecord';
import IMeta from '../interface/IMeta';

interface IUmarkedData {
  id: number
  [x: string]: any
}

/**
 * Class to present data.
 */
export default class Record extends Thing implements IRecord {
  id: number;

  /**
   *
   */
  constructor(data: IUmarkedData, meta?: IMeta) {
    super(data);
    this.id = data.id;
  }
}
