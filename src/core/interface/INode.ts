import IRecord from './IRecord';
import IList from './IList';

export default interface INode extends IRecord {
  parentId: number
  children: IList
}
