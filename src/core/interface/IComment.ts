import INode from './INode';
import IAuthor from './IAuthor';

export default interface IComment extends INode {
  author?: IAuthor|undefined;
  authorId: number;
  text: string;
  date: Date;
}
