export default interface IComment {
  id: number;
  parentId: number;
  authorId: number;
  text: string;
  date: number;
};