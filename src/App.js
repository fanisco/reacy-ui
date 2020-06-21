import React from 'react';
import {ContextProvider} from './state/Context';
import Layout from './ui/layout/Layout';
import Products from './ui/app/Products';
import Basket from './ui/app/Basket';

const App = () => {
  return (
    <ContextProvider>
      <Layout
        basket={<Basket/>}
        content={<Products/>}
      />
    </ContextProvider>
  );
}

export default App;
