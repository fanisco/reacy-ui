import React from 'react';
import {Layout} from 'reacy-ui';
import './Aside.scss';

export const Aside: React.FC<{}> = ({children}) => {
  return (
    <aside className="klk-aside">
      <Layout.Panel>{children}</Layout.Panel>
    </aside>
  );
};
