import React from 'react';
import {Misc, Lists, Buttons} from 'reacy-ui';

import {IComment} from '../types/IComment';
import './Comment.scss';

export const Comment: React.FC<IComment & {deleteComment: Function}> = ({id, body, deleteComment, ...props}) => {
  return (
    <div className="comment">
      <Buttons.Anchor className="comment__author" mods={['inline']}>
        <img className="comment__avatar" src={`https://i.pravatar.cc/32?t=${props.user?.id}`} alt="'s Avatar" width="32px" height="32px"/>
      </Buttons.Anchor>
      <Misc.Bubble className="comment__body">
        {body}
        <Lists.Toolbar
          className="rcy-easing comment__actions"
          itemClassName="comment__action"
          items={[
            <Buttons.Anchor
              key="delete"
              mods={['danger', 'inline']}
              title="Delete comment"
              onClick={() => deleteComment(id)}>
              <Misc.Icon name="times"/>
            </Buttons.Anchor>
          ]}
        />
      </Misc.Bubble>
    </div>
  );
};
