import React, {useEffect, useContext} from 'react';
import {Store} from './state/Store';
import Layout from './ui/layout/Layout';
import Products from './ui/app/Products';

const App = () => {
  const {state, dispatch, items} = useContext(Store);
  console.log(items);
  return (
    <Layout>
      <Products items={items}/>
    </Layout>
  );
}

export default App;
