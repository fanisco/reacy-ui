import IList from '../interface/IList';
import Record from '../entity/Record';
import IData from '../interface/IData';
import IRecord from '../interface/IRecord';

/**
 * Class to present a mapped list of records.
 */
export default class List implements IList {
  protected _map: Map<number, IRecord>;
  protected _meta: unknown;
  protected _list: Array<IRecord>;

  /**
   * Constructor.
   * @param {IRecord[]} records Array of new raw data.
   * @param {*} meta Meta data that may occur in near data set.
   */
  constructor(records: IRecord[] = [], meta?: unknown) {
    // Save meta info
    this._meta = meta;
    // Create id map and list
    this._map = new Map();
    this._list = [];
    // Map and set records
    for (let record of records) {
      record.owner = this;
      if (record.id) {
        this._map.set(record.id, record);
      }
      this._list.push(record);
    }
  }

  getMeta(): unknown {
    return this._meta;
  }

  /**
   * Overriding standard map function to let it posible to render or something else.
   * @param {Function} callbackfn
   * @param {any} thisArg
   * @return {U[]}
   */
  public map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[] {
    return this._list.map(callbackfn, thisArg);
  }

  filter<U>(callbackfn: (value: any) => boolean): U[] {
    // @ts-ignore
    return this._list.filter(callbackfn);
  }

  /**
   * Get length of the list.
   * @return {number}
   */
  public length(): number {
    return this._list.length;
  }

  /**
   * @param {number} id
   * @return {IRecord}
   */
  public getById(id: number): IRecord|undefined {
    return this._map.get(id);
  }

  /**
   * Add record to the list.
   * @param {IRecord} record
   * @return boolean
   */
  public add(record: IRecord): boolean {
    this._list.push(record);
    return true;
  }

  /**
   * Create record and add it to the list.
   * @param {IData} data
   * @return boolean
   */
  public create(data: IData): boolean {
    // ToDo...
    return true;
  }

  /**
   * Creates list of record instances from sample data.
   * @param {any[]} items
   * @param {*} meta
   * @param {*} model
   * @return {List}
   */
  public static fromArray(items: any[], meta?: unknown, model?: any): IList {
    return new List(items.map(rec => List.recordFromObject(rec, model)), meta);
  }

  static recordFromObject(data: IData, model: any = Record) {
    return new model(data);
  }
}
