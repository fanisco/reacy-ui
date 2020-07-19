import React from 'react';
import {Misc, Lists, Buttons} from 'reacy-ui';

import {IComment} from '../types/IComment';

import './Comment.scss';

export const Comment: React.FC<IComment & {onDeleteClick?: (id: number) => void}> = ({id, body, onDeleteClick, ...props}) => {
  return (
    <div className="comment">
      <Buttons.Anchor className="comment__author" mods={['inline']}>
        <img className="comment__avatar" src={`https://i.pravatar.cc/32?t=${props.email}`} alt="'s Avatar" width="32px" height="32px"/>
      </Buttons.Anchor>
      <Misc.Bubble className="comment__body">
        {body}
        <Lists.Toolbar
          className="rcy-easing comment__actions"
          itemClassName="comment__action"
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
      </Misc.Bubble>
    </div>
  );
};
