import IRecord from '../core/interface/IRecord';
import INode from '../core/interface/INode';

interface IRecordNode extends IRecord, INode {

}

interface IMap {
  [x: number]: IRecordNode
}

  /**
 * @param {Array} list
 * @param {number} rootId
 * @return {Object}
 */
export default function mktree(list: Array<IRecordNode>, rootId: number = 0): Array<IRecord> {
  const map: IMap = {};
  const tree: any[] = [];

  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = list[i];
  }

  for (let item of list) {
    if (item.parentId === rootId) {
      tree.push(item);
    }
    else if (item.parentId) {
      if (map[item.parentId]) {
        map[item.parentId].children.push(item);
      }
    }
  }

  return tree
}
