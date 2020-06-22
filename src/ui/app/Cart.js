import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import './Cart.scss';

const Cart = () => {
  const {state} = useContext(Context);
  const {cart, products} = state;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map(item => {
          const product = products.find(product => product.id === item.id);
          return <li>{product.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Cart;
