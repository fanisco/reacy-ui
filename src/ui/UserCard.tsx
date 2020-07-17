import React, {useState, useContext} from 'react';
import {Popups, Lists} from 'reacy-ui';

import {Context} from '../state/Context';
import {hideUserCard} from '../state/actions';

import {Posts} from './Posts';
import {UserInfo} from './UserInfo';

export const UserCard: React.FC<{}> = ({...props}) => {
  const {state, dispatch} = useContext(Context);
  const [tabId, setTabId] = useState(1);
  return (
    state.user ?
      <Popups.Popup visible={true}>
        <Popups.Inner
          title={state.user.name}
          headerContent={
            <Lists.Tabs
              activeId={tabId}
              items={[{id: 1, caption: 'Info'}, {id: 2, caption: 'Posts'}]}
              onClick={id => setTabId(id)}
            />}
          onCloseClick={() => hideUserCard({dispatch})}
        >
          {tabId === 1 ?
            <UserInfo {...state.user}/> :
            <Posts userId={state.user.id}/>
          }
        </Popups.Inner>
      </Popups.Popup>
    : null
  );
};
