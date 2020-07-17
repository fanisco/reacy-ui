import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Lists} from 'reacy-ui';

import {Comment} from './Comment';

import {IComment} from '../types/IComment';

export const Comments: React.FC<{postId: number;}> = ({postId, ...props}) => {
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
    axios
      .get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(resp => setComments(resp.data));
  }, [postId]);
  return (
    comments.length ?
      <Lists.List mods={['spacedY', 'spacedX']}>
        {comments.map((comment, i) => (
          <Comment {...comment} key={i} onDeleteClick={id => setComments(comments.filter(comment => comment.id !== id))}/>
        ))}
      </Lists.List> :
      <h4>No comments posted yet</h4>
  );
};
