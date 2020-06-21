import React, {useContext} from 'react';
import Grid from '../layout/Grid';
import Product from './Product';
import {Context} from '../../state/Context';
import './Products.scss';

const Products = () => {
  const {state} = useContext(Context);
  return (
    <div className="products">
      <Grid items={state.items.map((item, i) => <Product key={i} item={item}/>)}/>
    </div>
  );
}

export default Products;
