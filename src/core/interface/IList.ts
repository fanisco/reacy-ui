import IRecord from './IRecord';

export default interface IList extends Array<IRecord> {
  getById(id: number): IRecord|undefined
}
