import IRecord from './IRecord';

export default interface IList {
  getById(id: number): IRecord|undefined
}
