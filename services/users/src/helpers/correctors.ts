import {IComment} from '../types/IComment';
import {IUser} from '../types/IUser';

/**
 * Link comments with users.
 */
export const saturateComments = (comments: IComment[], users: IUser[]) => {
  return comments.map((comment, i) => ({...comment, user: users[i]}))
};

export const saturateUsers = (users: IUser[]) => {
  return users.map(user => ({...user, photo: `https://i.pravatar.cc/32?t=${user.id}`}));
};
