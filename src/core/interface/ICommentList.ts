import IList from "./IList";

export default interface ICommentList extends IList {
  map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[]
}
