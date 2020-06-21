import React, {useContext} from 'react';
import Button from '../kit/Button';
import {addToCart} from '../../state/actions';
import {Context} from '../../state/Context';
import './Product.scss';

const Product = ({item}) => {
  const {state, dispatch} = useContext(Context);
  const inCartItem = state.cart.find(i => i.id === item.id);
  return (
    <div className="product">
      <div className="product__image"><img src={item.image} alt={item.title}/></div>
      <span className="product__title">{item.title}</span>
      <div className="product__descr">{item.descr}</div>
      <div className="product__bottom">
        <span className="product__price">${item.price} {inCartItem ? inCartItem.amount : 0}</span>
        <Button
          caption={inCartItem ? 'In cart' : 'Add to cart'}
          onClick={() => addToCart({dispatch, id: item.id, amount: 1})}
        />
      </div>
    </div>
  );
}

export default Product;
