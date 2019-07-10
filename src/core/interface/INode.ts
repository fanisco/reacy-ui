import IList from './IList';

export default interface INode {
  parentId: number
  children: IList
}
