import React, {useContext, useRef} from 'react';
import {Popups, Lists, Buttons} from 'reacy-ui';

import {UserCard} from './UserCard';
import {Context} from '../state/Context';
import {showUserCard} from '../state/actions';

const Users: React.FC<Popups.IOpenerProps> = ({popupManager, ...props}) => {
  const {state, dispatch} = useContext(Context);
  const popup = useRef(popupManager.create({
    component: UserCard
  }));
  return (
    <>
      <h1>Users</h1>
      <Lists.List>
        {state.users.map((user, i) =>
          <Buttons.Button
            key={i}
            mods={['primary', 'inline']}
            onClick={() => {
              showUserCard({dispatch, user});
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
