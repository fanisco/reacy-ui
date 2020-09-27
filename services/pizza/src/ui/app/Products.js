import React, {useContext} from 'react';
import Product from './Product';
import {Context} from '../../state/Context';
import './Products.scss';

const Products = () => {
  const {state} = useContext(Context);
  return (
    <div className="products">{state.products.map((product, i) => <Product key={i} product={product}/>)}</div>
  );
};

export default Products;
