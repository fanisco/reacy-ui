import React, {useContext} from 'react';
import {Lists, Buttons} from 'reacy-ui';

import {Context} from '../state/Context';
import {showUserCard} from '../state/actions';

export const Users: React.FC<{}> = ({...props}) => {
  const {state, dispatch} = useContext(Context);
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
