import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Lists, Buttons} from 'reacy-ui';

import {Context} from '../state/Context';
import {fetchUsers, showUserCard} from '../state/actions';

import {IUser} from '../types/IUser';

export const Users: React.FC<{}> = ({...props}) => {
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    fetchUsers<IUser[]>({dispatch})
  }, []);

  return (
    <>
      <h1>Users</h1>
      <Lists.List>
        {state.users.map((user, i) =>
          <Buttons.Button
            key={i}
            mods={['primary', 'inline']}
            onClick={() => showUserCard({dispatch, user})}
          >
            {user.name}
          </Buttons.Button>
        )}
      </Lists.List>
    </>
  );
};
