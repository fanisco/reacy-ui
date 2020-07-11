import React from 'react';
import styled from 'styled-components';

import {Provider} from './state/Context';

import {List} from './ui/persons/List';
import {Comform} from './ui/comment/Comform';
import {Settings} from './ui/settings/Settings';
import {CommentList} from './ui/comment/CommentList';

import {Layout, Popups} from 'reacy-ui';

export const App: React.FC = () => {
  return (
    <Provider>
      <Page>
        <Sidebar/>
        <Main>
          <List/>
          <Settings/>
          <CommentList/>
          <Comform/>
        </Main>
      </Page>
    </Provider>
  );
};

const Page = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-areas: "sidebar main";
  grid-template-columns: 90px 1fr;
`;

const Sidebar = styled.aside`
    display: flex;
    grid-area: sidebar;
`;

const Main = styled.main`
    display: flex;
    grid-area: main;
`;
