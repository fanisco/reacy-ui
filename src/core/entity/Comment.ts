import Record from './Record';
import Author from './Author';
import IComment from '../interface/IComment';
import IMeta from '../interface/IMeta';

/**
 * The model of comment item.
 */
export default class Comment extends Record implements IComment {
  public author?: Author;
  public author_id?: number;
  public comment_id?: number;
  public text?: string;
  public date?: Date;

  /**
   * @inheritDoc
   */
  constructor(data: any, meta?: IMeta) {
    super(data);
    this.author_id = data.author_id;
    this.text = data.text;
    this.date = new Date(data.date);

    // Get author from meta information
    if (meta && this.author_id) {
      const authors = meta.getList('authors');
      if (authors) {
        this.author = new Author(authors.getById(this.author_id));
      }
    }
  }
}
