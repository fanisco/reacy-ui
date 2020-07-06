import Record from './Record';
import INode from '../interface/INode';
import IList from '../interface/IList';

/**
 * The model of comment item.
 */
export default class Node extends Record implements INode {
  parentId: number;
  children: IList;
  constructor({parentId, children, ...data}: INode) {
    super(data);
    this.parentId = parentId;
    this.children = children;
  }
}
