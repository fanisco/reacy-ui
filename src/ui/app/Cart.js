import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import Table from '../kit/Table';
import './Cart.scss';

const columns = [{
  id: 'id'
}, {
  id: 'title',
  template: (name) => <span className="cart__item-product-name">{name}</span>
}, {
  id: 'price',
  type: 'price'
}, {
  id: 'amount'
}, {
  id: 'cost',
  type: 'price'
}];

const Cart = () => {
  const {state} = useContext(Context);
  const {cart, products} = state;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <Table
        columns={columns}
        rows={cart.map(item => {
          const product = products.find(product => product.id === item.id);
          return {...item, ...product, cost: product.price * item.amount};
        })}
      />
    </div>
  )
}

export default Cart;
