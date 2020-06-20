import React, {useEffect, useContext} from 'react';
import {Store} from './state/Store';
import Products from './ui/Products';
import './App.css';

const App = () => {
  const {state, dispatch, items} = useContext(Store);
  console.log(items);
  return (
    <div className="App">
      <Products items={items}/>
    </div>
  );
}

export default App;
