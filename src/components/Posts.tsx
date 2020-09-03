import React from 'react';
import {Lists} from 'reacy-ui';

import {MiniPost} from './MiniPost';
import {IPost} from '../types/IPost';

export const Posts: React.FC<{list: IPost[]}> = ({list}) => {
  return (
    <Lists.List mods={['']}>
      {list.map((post, i) => (
        <MiniPost key={i} {...post}/>
      ))}
    </Lists.List>
  );
};

