import React from 'react';

import {CommentsContainer} from '../containers/CommentsContainer';
import {ComformContainer} from '../containers/ComformContainer';
import {IPost} from '../types/IPost';

export const Post: React.FC<{post?: IPost}> = ({post}) => {
  // const [post, setPost] = useState<IPost>({id, userId: 0, title: 'Loading...', body: 'Text is loading...'});
  if (!post) {
    return null;
  }
  return (
    <>
      <h1 id="#post">{post.title}</h1>
      <article>
        {post.body}
      </article>
      <h3 id="#comments">Comments</h3>
      <CommentsContainer/>
      <ComformContainer/>
    </>
  );
};
