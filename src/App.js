import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {ContextProvider} from './state/Context';
import Layout from './ui/layout/Layout';
import Products from './ui/app/Products';
import Basket from './ui/app/Basket';
import Cart from './ui/app/Cart';
import Checkout from './ui/app/Checkout';
import BackButton from './ui/kit/buttons/BackButton';

const App = () => {
    // const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    // const styles = ['default', 'primary', 'secondary', 'success'];
    // const additional = ['rounded', 'textCenter', 'shadow', 'outline'];
    // return (
    //     <div style={{
    //         display: 'grid',
    //         gridTemplateColumns: 'repeat(4, 1fr)',
    //         gridGap: '10px'
    //     }}>
    //         {sizes.map((size, i) => {
    //             return styles.map(style => [
    //                 <Button mods={[size, style]} href="http://example.com">{size}, {style}</Button>,
    //                 <Button mods={[size, style, ...additional]}>{size}, {style}</Button>
    //             ]);
    //         })}
    //     </div>
    // );
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/cart">
            <Layout
              headerSlot1={<BackButton/>}
              content={<Cart/>}
            />
          </Route>
          <Route path="/checkout">
            <Layout
              headerSlot1={<BackButton/>}
              content={<Checkout/>}
            />
          </Route>
          <Route path="/">
            <Layout
              headerSlot3={<Basket/>}
              content={<Products/>}
            />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
