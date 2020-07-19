import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Lists} from 'reacy-ui';

import {Context} from '../state/Context';

import {Comment} from './Comment';
import {Comform} from './Comform';

import {IComment} from '../types/IComment';

import {saturateComments} from '../helpers/correctors';

export const Comments: React.FC<{postId: number;}> = ({postId, ...props}) => {
  const {state} = useContext(Context);
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
    if (!state.users.length) {
      return;
    }
    axios
      .get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(resp => setComments(saturateComments(resp.data, state.users)));
  }, [postId, state.users.length]);
  return (
    <>
      {comments.length ?
        <Lists.List mods={['spacedY', 'spacedX']}>
          {comments.map((comment, i) => (
            <Comment {...comment} key={i} onDeleteClick={id => setComments(comments.filter(comment => comment.id !== id))}/>
          ))}
        </Lists.List> :
        <h4>No comments posted yet</h4>
      }
      <Comform onPostComment={comment => {
        setComments([...comments, {
          postId,
          id: (new Date()).getTime(),
          body: comment,
          name: 'new comment',
          email: state.users[0].email
        }]);
      }}/>
    </>
  );
};
