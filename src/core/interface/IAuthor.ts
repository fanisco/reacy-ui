import IRecord from './IRecord';

export default interface IAuthor extends IRecord {
  name: string;
  photo?: string;
}
