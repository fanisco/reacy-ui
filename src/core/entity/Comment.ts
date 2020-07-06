import Node from './Node';
import IComment from '../interface/IComment';
import IAuthor from '../interface/IAuthor';
import ICommentsMeta from '../interface/ICommentsMeta';

/**
 * The model of comment item.
 */
export default class Comment extends Node implements IComment {
  public authorId: number;
  public text: string;
  public date: Date;

  constructor({authorId, text, date, ...data}: IComment) {
    super(data);
    this.authorId = authorId;
    this.text = text;
    this.date = new Date(date);
  }

  get author(): IAuthor | undefined {
    const meta = this.owner && this.owner.getMeta() as ICommentsMeta;
    if (meta) {
      return meta.authors.getById(this.authorId) as IAuthor;
    }
    return undefined;
  }
}
