import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Lists} from 'reacy-ui';

import {MiniPost} from './MiniPost';

import {IPost} from '../types/IPost';

export const Posts: React.FC<{userId: number;}> = ({userId, ...props}) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    axios
      .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(resp => setPosts(resp.data));
  }, [userId]);
  return (
    <Lists.List>
      {posts.map((post, i) => (
        <MiniPost key={i} {...post}/>
      ))}
    </Lists.List>
  );
};

