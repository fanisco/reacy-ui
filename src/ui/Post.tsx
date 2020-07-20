import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from './Header';
import {Comments} from './Comments';

import {IPost} from '../types/IPost';

export const Post: React.FC<{id: number;}> = ({id, ...props}) => {
  const [post, setPost] = useState<IPost>({id, userId: 0, title: 'Loading...', body: 'Text is loading...'});
  useEffect(() => {
    axios
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(resp => setPost(resp.data));
  }, [id]);
  return (
    <>
      <Header title={post.title}/>
      <article>
        {post.body}
      </article>
      <h3 id="#comments">Comments</h3>
      <Comments postId={id}/>
    </>
  );
};
