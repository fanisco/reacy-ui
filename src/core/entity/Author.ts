import Record from './Record';
import IAuthor from '../interface/IAuthor';

/**
 * Class to present author.
 */
export default class Author extends Record implements IAuthor {
  name: string;
  photo?: string;
  constructor({name, photo, ...data}: IAuthor) {
    super(data);
    this.name = name;
    this.photo = photo;
  }
}
