import React, {useContext} from 'react';
import {Button} from 'reacy-ui';
import {cartItemAdd} from '../../state/actions';
import {Context} from '../../state/Context';
import './Product.scss';

const Product = ({product}) => {
  const {state, dispatch} = useContext(Context);
  const inCartItem = state.cart.find(i => i.id === product.id);
  return (
    <div className="product">
      <div className="product__image"><img {...product.image} alt={product.title}/></div>
      <span className="product__title">{product.title}</span>
      <div className="product__descr">{product.descr}</div>
      <div className="product__bottom">
        <span className="product__price">${product.price} {inCartItem ? inCartItem.amount : 0}</span>
        <Button
          caption={inCartItem ? 'In cart' : 'Add to cart'}
          onClick={() => cartItemAdd({dispatch, id: product.id, amount: 1})}
          mode="secondary"
        />
      </div>
    </div>
  );
}

export default Product;
