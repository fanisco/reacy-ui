import List from "./List";
import ICommentList from "../interface/ICommentList";
import Comment from "../entity/Comment";
import IMeta from "../interface/IMeta";
import mktree from "../../helpers/mktree";
import IData from "../interface/IData";

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
   * Add comment to the list.
   * @param {IData} data
   * @return boolean
   */
  public create(data: IData): boolean {
    this._list.push(CommentList.toRecord(data, this._meta));
    return true
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
