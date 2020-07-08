import React from 'react';

import {Provider} from './state/Context';

import {Comform} from './ui/comment/Comform';
import {Settings} from './ui/settings/Settings';
import {CommentList} from './ui/comment/CommentList';

import {Layout} from 'reacy-ui';

export const App: React.FC = () => {
  return (
    <Provider>
      <Layout.Container>
        <Settings/>
        <CommentList/>
        <Comform/>
      </Layout.Container>
    </Provider>
  );
};
