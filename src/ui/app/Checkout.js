import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import {cartItemAmount, cartItemRemove} from '../../state/actions';
import Table from '../kit/Table';
import Input from '../kit/form/Input';
import Button from '../kit/Button';
import Amount from './Amount';
import './Cart.scss';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__field">
        <Input placeholder="Street"/>
      </div>
      <div className="checkout__field">
        <Input placeholder="House"/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Flat"/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Comment"/>
      </div>
      <Button caption="Confirm"/>
    </div>
  )
}

export default Checkout;
