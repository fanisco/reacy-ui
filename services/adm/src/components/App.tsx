import React from 'react';
import {Layout} from 'reacy-ui';
import {LoginForm} from './LoginForm';
import './App.scss';

export const App: React.FC<{}> = () => {
  return (
    <Layout.Container className="App__container" mods={['md']}>
      <LoginForm/>
    </Layout.Container>
  );
}
