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
          <Left>
            <List/>
          </Left>
          <Center>
            <CommentList/>
            <Comform/>
          </Center>
          <Right>
            <Settings/>
          </Right>
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
  display: grid;
  grid-area: main;
  grid-template-areas: "left center right";
  grid-template-columns: 300px 1fr 100px;
`;

const Left = styled.div`
  border-right: 1px solid var(--rcy-color-default-border);
`;
const Right = styled.div`
  border-left: 1px solid var(--rcy-color-default-border);
`;
const Center = styled.div`
`;
