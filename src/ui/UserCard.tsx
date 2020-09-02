import React, {useState, useContext} from 'react';
import {Popups, Lists} from 'reacy-ui';

import {Context} from '../state/Context';

import {Posts} from './Posts';
import {UserInfo} from './UserInfo';

export const UserCard: React.FC<Popups.IPopupProps> = ({...props}) => {
  const {state, dispatch} = useContext(Context);
  const [tabId, setTabId] = useState(1);
  if (!state.user) {
    return null;
  }
  return (
    <Popups.PopupOverlay isOpen={props.isOpen} onClose={props.onClose}>
      <Popups.PopupBody
        isOpen={props.isOpen}
        onClose={props.onClose}
        title={state.user.name}
        headerContent={
          <Lists.Tabs
            activeId={tabId}
            items={[{id: 1, caption: 'Info'}, {id: 2, caption: 'Posts'}]}
            onClick={id => setTabId(id)}
          />
        }>
        {tabId === 1 ?
          <UserInfo {...state.user}/> :
          <Posts userId={state.user.id}/>
        }
      </Popups.PopupBody>
    </Popups.PopupOverlay>
  );
};
