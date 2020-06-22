import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ContextProvider} from './state/Context';
import Layout from './ui/layout/Layout';
import Products from './ui/app/Products';
import Basket from './ui/app/Basket';
import Cart from './ui/app/Cart';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Layout
              basket={<Basket/>}
              content={<Products/>}
            />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
