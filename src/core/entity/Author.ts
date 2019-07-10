import Record from './Record';
import IAuthor from '../interface/IAuthor';

/**
 * Class to present author.
 */
export default class Author extends Record implements IAuthor {
  public name: string;
  public photo?: string;

  /**
   * @inheritDoc
   */
  constructor(data: any) {
    super(data);
    this.name = this.data.name;
    this.photo = this.data.photo;
  }
}
