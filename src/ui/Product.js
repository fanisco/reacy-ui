import React from 'react';
import './Product.scss';

const Product = ({item}) => {
  return (
    <div className="product">
      <div className="product__image"><img src={item.image} alt={item.title}/></div>
      <span className>{item.title}</span>
    </div>
  );
}

export default Product;
