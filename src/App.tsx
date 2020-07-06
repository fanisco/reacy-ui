import React from 'react';
import styled from 'styled-components';

import {Provider} from './state/Context';

import {Comform} from './ui/comment/Comform';
import {Settings} from './ui/settings/Settings';
import {CommentList} from './ui/comment/CommentList';

export const App: React.FC = () => {
  return (
    <Provider>
      <Layout>
        <Settings/>
        <CommentList/>
        <Comform/>
      </Layout>
    </Provider>
  );
};

const Layout = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
