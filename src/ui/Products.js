import React from 'react';
import Product from './Product';
import './Products.scss';

const Products = ({items}) => {
  return (
    <div className="products">
      {items.map((item, i) => <Product key={i} item={item}/>)}
    </div>
  );
}

export default Products;
