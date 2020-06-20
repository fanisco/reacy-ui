import React from 'react';
import Button from '../kit/Button';
import './Product.scss';

const Product = ({item}) => {
  return (
    <div className="product">
      <div className="product__image"><img src={item.image} alt={item.title}/></div>
      <span className="product__title">{item.title}</span>
      <div className="product__descr">{item.descr}</div>
      <div className="product__bottom">
        <span className="product__price">${item.price}</span>
        <Button caption="Add to cart"/>
      </div>
    </div>
  );
}

export default Product;
