import React from 'react';
import Grid from '../layout/Grid';
import Product from './Product';
import './Products.scss';

const Products = ({items}) => {
  return (
    <div className="products">
      <Grid items={items.map((item, i) => <Product key={i} item={item}/>)}/>
    </div>
  );
}

export default Products;
