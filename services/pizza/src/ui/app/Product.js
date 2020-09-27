import React, {useContext} from 'react';
import {Buttons} from 'reacy-ui';
import {cartItemAdd} from '../../state/actions';
import {Context} from '../../state/Context';
import './Product.scss';

const Product = ({product}) => {
  const {state, dispatch} = useContext(Context);
  const item = state.cart.find(i => i.id === product.id);
  const buttonMods = ['primary', 'rounded'];
  if (!item) {
    buttonMods.push('outline');
  }
  return (
    <div className="product">
      <div className="product__image"><img {...product.image} alt={product.title}/></div>
      <span className="product__title">{product.title}</span>
      <div className="product__descr">{product.descr}</div>
      <div className="product__bottom">
        <span className="product__price">${product.price}</span>
        <Buttons.Button
          className="product__add"
          onClick={() => cartItemAdd({dispatch, id: product.id, amount: 1})}
          mods={buttonMods}
        >{item ? 'In cart' : 'Add to cart'}</Buttons.Button>
      </div>
    </div>
  );
}

export default Product;
