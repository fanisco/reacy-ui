import React, {useState} from 'react';
import {Lists} from 'reacy-ui';

import {RouteButton} from './RouteButton';

import {IPost} from '../types/IPost';

export const MiniPost: React.FC<IPost> = ({id, title, body, ...props}) => {
  const [textVisible, setTextVisible] = useState(false);
  return (
    <>
      <h4 className="rcy-ellipsis">
        <RouteButton href={`/posts/${id}`} mods={['inline', 'underline', 'lg', 'primary', 'displayInline']}>{title}</RouteButton>
      </h4>
      {textVisible ? <p>{body}</p> : null}
      <Lists.Toolbar
        items={[
          {
            anchor: true,
            caption: !textVisible ? 'Show text' : 'Hide text',
            onClick: () => setTextVisible(!textVisible),
            mods: ['sm', 'underline', 'inline', 'displayInline', 'dashed']
          },
          ...(textVisible ? [{
            anchor: true,
            href: `/posts/${id}/#comments`,
            caption: 'Comments',
            mods: ['sm', 'underline', 'inline', 'displayInline']
          }] : [])
        ]}
      />
    </>
  );
};
