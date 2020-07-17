import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Lists, Buttons} from 'reacy-ui';

import {Context} from '../state/Context';
import {showUserCard} from '../state/actions';

import {IUser} from '../types/IUser';

export const Users: React.FC<{}> = ({...props}) => {
  const {dispatch} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => setUsers(resp.data));
  }, []);

  return (
    <>
      <h1>Users</h1>
      <Lists.List>
        {users.map((user, i) =>
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
