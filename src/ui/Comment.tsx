import React from 'react';
import {Misc, Lists, Buttons} from 'reacy-ui';

import {IComment} from '../types/IComment';

import './Comment.scss';

export const Comment: React.FC<IComment & {onDeleteClick?: (id: number) => void}> = ({id, body, onDeleteClick, ...props}) => {
  return (
    <div className="comment">
      <img className="comment__image" src={`https://i.pravatar.cc/32?t=${props.email}`} alt="'s Avatar" width="32px" height="32px"/>
      <Misc.Bubble>{body}</Misc.Bubble>
      <Lists.Toolbar
        className="rcy-easing comment__actions"
        items={[
          <Buttons.Anchor
            mods={['danger', 'inline']}
            title="Delete comment"
            onClick={() => onDeleteClick && onDeleteClick(id)}
          >
            <Misc.Icon name="times"/>
          </Buttons.Anchor>
        ]}
      />
    </div>
  );
};
