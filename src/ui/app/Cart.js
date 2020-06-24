import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import {cartItemAmount, cartItemRemove} from '../../state/actions';
import Table from '../kit/Table';
import SpaButton from '../kit/buttons/SpaButton';
import Amount from './Amount';
import './Cart.scss';

const columns = [{
  id: 'image',
  width: '80px',
  template: ({image, title}) => <img className="cart__item-product-image" {...image} alt={title}/>
}, {
  id: 'title',
  template: ({title}) => <span className="cart__item-product-name">{title}</span>
}, {
  id: 'amount',
  caption: 'Amount'
}, {
  id: 'price',
  caption: 'Price',
  template: ({price}) => <span className="cart__item-product-price">{price}</span>
}, {
  id: 'total',
  caption: 'Total',
  template: ({total}) => <span className="cart__item-product-total">{total}</span>
}];

const Cart = () => {
  const {state, dispatch} = useContext(Context);
  const {cart, products} = state;
  columns
    .find(column => column.id === 'amount')
    .template = ({amount, id}) => <Amount amount={amount} onChange={amount => {
      if (amount > 0) {
        cartItemAmount({dispatch, id, amount});
      } else {
        cartItemRemove({dispatch, id});
      }
    }}/>;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <Table
        columns={columns}
        rows={cart.map(item => {
          const product = products.find(product => product.id === item.id);
          return {...item, ...product, total: product.price * item.amount};
        })}
      />
      <SpaButton caption="Checkout" href="/checkout"/>
    </div>
  )
}

export default Cart;
