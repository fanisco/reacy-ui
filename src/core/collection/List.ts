import IList from '../interface/IList';
import Record from '../entity/Record';
import IMeta from '../interface/IMeta';
import IData from '../interface/IData';

/**
 * Class to present a mapped list of records.
 */
export default class List implements IList {
  protected _map: Map<number, Record>;
  protected _meta?: IMeta;
  protected _list: Array<Record>;

  /**
   * Constructor.
   * @param {Record[]} records Array of new raw data.
   * @param {Meta} meta Meta data that may occur in near data set.
   */
  constructor(records: Record[] = [], meta?: IMeta) {

    // Save meta info
    this._meta = meta;

    // Create id map and list
    this._map = new Map();
    this._list = [];

    // Map and set records
    for (let record of records) {
      if (record) {
        if (record.id) {
          this._map.set(record.id, record)
        }
        this._list.push(record)
      }
    }
  }

  /**
   * Overriding standard map function to let it posible to render or something else.
   * @param {Function} callbackfn
   * @param {any} thisArg
   * @return {U[]}
   */
  public map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[] {
    return this._list.map(callbackfn, thisArg)
  }

  /**
   * Get length of the list.
   * @return {number}
   */
  public length(): number {
    return this._list.length
  }

  /**
   * @param {number} id
   * @return {Record}
   */
  public getById(id: number): Record|undefined {
    return this._map.get(id)
  }

  /**
   * Add record to the list.
   * @param {Record} record
   * @return boolean
   */
  public add(record: Record): boolean {
    this._list.push(record);
    return true
  }

  /**
   * Create record and add it to the list.
   * @param {IData} data
   * @return boolean
   */
  public create(data: IData): boolean {
    // ToDo...
    return true
  }

  /**
   * Creates item from data to record class instance.
   * Here are possible combinations of record classes.
   * @param {any} item
   * @param {Meta} meta
   * @return {Record}
   */
  public static toRecord(item: any, meta?: IMeta): Record {
    return new Record(item, meta)
  }

  /**
   * Creates list of record instances from sample data.
   * @param {any[]} items
   * @param {Meta} meta
   */
  public static toRecords(items: any[], meta?: IMeta): Record[] {
    const list: Record[] = [];
    for (let item of items) {
      list.push(List.toRecord(item, meta))
    }
    return list
  }
}
