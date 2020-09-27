import React, {useRef} from 'react';
import {Popups, Lists, Buttons} from 'reacy-ui';

import {UserCardContainer} from '../containers/UserCardContainer';
import {IUser} from '../types/IUser';

const Users: React.FC<{
  list: IUser[];
  setCurrentUser: Function
} & Popups.IOpenerProps> = ({list = [], setCurrentUser, popupManager}) => {
  const popup = useRef(popupManager.create({
    component: UserCardContainer
  }));
  return (
    <>
      <h1>Users</h1>
      <Lists.List>
        {list.map((user, i) =>
          <Buttons.Button
            key={i}
            mods={['primary', 'inline']}
            onClick={() => {
              setCurrentUser(user);
              popupManager.open(popup.current.id);
            }}>
            {user.name}
          </Buttons.Button>
        )}
      </Lists.List>
    </>
  );
};

const wrappedUsers = Popups.withPopups()(Users);
export {wrappedUsers as Users};
