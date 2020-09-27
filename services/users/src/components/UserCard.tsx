import React, {useState, useEffect} from 'react';
import {Popups, Lists} from 'reacy-ui';

import {PostsContainer} from '../containers/PostsContainer';
import {UserInfo} from './UserInfo';
import {IUser} from '../types/IUser';

enum Tabs {
  info, posts
};

export const UserCard: React.FC<{
  fetchPosts: Function;
  user?: IUser
} & Popups.IPopupProps> = ({fetchPosts, user, ...props}) => {
  const [tabId, setTabId] = useState(Tabs.info);

  useEffect(() => {
    if (user && tabId === Tabs.posts) {
      fetchPosts(user.id);
    }
  }, [user, tabId, fetchPosts]);

  if (!user) {
    return null;
  }

  return (
    <Popups.PopupOverlay isOpen={props.isOpen} onClose={props.onClose}>
      <Popups.PopupBody
        isOpen={props.isOpen}
        onClose={props.onClose}
        title={user.name}
        headerContent={
          <Lists.Tabs
            activeId={tabId}
            items={[{id: Tabs.info, caption: 'Info'}, {id: Tabs.posts, caption: 'Posts'}]}
            onClick={id => setTabId(id)}
          />
        }>
        {tabId === Tabs.info ?
          <UserInfo {...user}/> :
          <PostsContainer/>
        }
      </Popups.PopupBody>
    </Popups.PopupOverlay>
  );
};
