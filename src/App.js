import React from 'react';
import {Context, ContextProvider} from './state/Context';
import Layout from './ui/layout/Layout';
import Products from './ui/app/Products';

const App = () => {
  return (
    <ContextProvider>
      <Layout>
        <Products/>
      </Layout>
    </ContextProvider>
  );
}

export default App;
