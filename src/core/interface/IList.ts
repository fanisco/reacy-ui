import IRecord from './IRecord';
import IData from './IData';

export default interface IList {
  getMeta(): unknown;
  map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[];
  filter<U>(callbackfn: (value: any) => boolean): U[];
  getById(id: number): IRecord|undefined;
  add(record: IRecord): boolean;
  create(data: IData): boolean;
  length(): number;
}
