import Record from './Record';

/**
 * Class to present author.
 */
export default class Author extends Record {
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
