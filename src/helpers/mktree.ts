import IData from '../core/interface/IData';

  /**
 * @param {Array} list
 * @param {number} rootId
 * @return {Object}
 */
export default function mktree(list: any[], rootId: number = 0): any[] {
  const map: IData<any> = {};
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
        map[item.parentId].children = map[item.parentId].children || [];
        map[item.parentId].children.push(item);
      }
    }
  }

  return tree
}
