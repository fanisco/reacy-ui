import React from 'react';
import {Lists} from 'reacy-ui';

import {IUser} from '../types/IUser';

export const UserInfo: React.FC<IUser> = ({name, email, website, ...props}) => {
  return (
    <>
      <h3>{name}</h3>
      <Lists.List>
        <strong>Email:</strong> {email}
        <strong>Website:</strong> {website}
      </Lists.List>
    </>
  );
};
