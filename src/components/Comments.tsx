import React from 'react';
import {Lists} from 'reacy-ui';

import {CommentContainer} from '../containers/CommentContainer';
import {IComment} from '../types/IComment';

export const Comments: React.FC<{list: IComment[]}> = ({list = [], ...props}) => {
  if (!list.length) {
    return <h4>No comments posted yet</h4>;
  }
  return (
    <Lists.List mods={['spacedY', 'spacedX']}>
      {list.map((comment, i) => (
        <CommentContainer {...comment} key={i}/>
      ))}
    </Lists.List>
  );
};
