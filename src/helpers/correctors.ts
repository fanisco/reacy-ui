import {IComment} from '../types/IComment';
import {IUser} from '../types/IUser';

/**
 * Link comments with users.
 */
export const saturateComments = (comments: IComment[], users: IUser[]) => {
  return comments.map((comment, i) => ({...comment, email: users[i].email}))
};