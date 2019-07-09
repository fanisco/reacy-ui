import List from './List';
import Comment from '../entity/Comment';
import IMeta from '../interface/IMeta';

/**
 * Class to present a list of comments.
 */
export default class CommentList extends List {

  /**
   * @inheritDoc
   */
  constructor(records: any[], meta?: IMeta) {
    super(records, meta);
  }

  /**
   * @inheritDoc
   */
  protected record(data: any, meta?: IMeta): Comment {
    return new Comment(data, meta)
  }
}
