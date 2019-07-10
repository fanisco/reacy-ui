import List from './List';
import ICommentList from '../interface/ICommentList';
import Comment from '../entity/Comment';
import IMeta from '../interface/IMeta';
import mktree from '../../helpers/mktree';

/**
 * Class to present a list of comments.
 */
export default class CommentList extends List implements ICommentList {

  /**
   * @inheritDoc
   */
  constructor(records: Comment[] = [], meta?: IMeta) {
    super(mktree(records), meta);
  }

  /**
   * @inheritDoc
   */
  public static toRecord(data: any, meta?: IMeta): Comment {
    return new Comment(data, meta)
  }

  /**
   * @inheritDoc
   */
  public static toRecords(items: any[], meta?: IMeta): Comment[] {
    const list: Comment[] = [];
    for (let item of items) {
      list.push(CommentList.toRecord(item, meta))
    }
    return list
  }
}
