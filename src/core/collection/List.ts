import IList from '../interface/IList';
import Record from '../entity/Record';
import IMeta from '../interface/IMeta';

/**
 * Class to present a mapped list of records.
 */
export default class List extends Array implements IList {
  protected _map: Map<number, Record>;

  /**
   * Constructor.
   * @param {any[]} records Array of new raw data.
   * @param {Meta} meta Meta data that may occur in near data set.
   */
  constructor(records: any[], meta?: IMeta) {
    super();

    // Create id map
    this._map = new Map();

    // Create records
    for (let rec of records) {
      const record = this.record(rec, meta);

      if (record) {
        if (record.id) {
          this._map.set(record.id, record)
        }
        this.push(record)
      }
    }
  }

  /**
   * Overriding standard map function to let it posible to render or something else.
   * @param {Function} callbackfn
   * @param {any} thisArg
   * @return {U[]}
   */
  public map<U>(callbackfn: (value: Record, index: number, array: Record[]) => U, thisArg?: any): U[] {
    return [...this].map(callbackfn, thisArg)
  }

  /**
   * Creates item from data to record class instance.
   * Here are possible combinations of record classes.
   * @param {any} data
   * @param {Meta} meta
   * @return {Record}
   */
  protected record(data: any, meta?: IMeta) {
    return new Record(data, meta);
  }

  /**
   * @param {number} id
   * @return {Record}
   */
  public getById(id: number): Record|undefined {
    return this._map.get(id)
  }
}
