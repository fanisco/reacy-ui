import IRecord from './IRecord';
import INode from './INode';
import IAuthor from './IAuthor';

export default interface IComment extends IRecord, INode {
  author?: IAuthor,
  authorId?: number
  commentId?: number
  text?: string,
  date?: Date
}
