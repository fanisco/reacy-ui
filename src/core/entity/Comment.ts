import Record from './Record';
import Author from './Author';
import IComment from '../interface/IComment';
import IMeta from '../interface/IMeta';
import INode from '../interface/INode';
import IList from '../interface/IList';
import CommentList from '../collection/CommentList';

/**
 * The model of comment item.
 */
export default class Comment extends Record implements IComment, INode {
  parentId: number;
  authorId?: number;
  author?: Author;
  text?: string;
  date?: Date;
  children: IList;

  /**
   * @inheritDoc
   */
  constructor(data: any, meta?: IMeta) {
    super(data);
    this.parentId = data.comment_id;
    this.authorId = data.author_id;
    this.text = data.text;
    this.date = new Date(data.date);
    this.children = new CommentList();

    // Get author from meta information
    if (meta && this.authorId) {
      const authors = meta.getList('authors');
      if (authors) {
        this.author = new Author(authors.getById(this.authorId));
      }
    }
  }
}
