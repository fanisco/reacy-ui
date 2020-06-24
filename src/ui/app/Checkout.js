import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import {cartItemAmount, cartItemRemove} from '../../state/actions';
import Table from '../kit/Table';
import Input from '../kit/form/Input';
import Button from '../kit/buttons/Button';
import Amount from './Amount';
import './Cart.scss';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__field">
        <Input placeholder="Street" mods={['l']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="House" mods={['l']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Flat" mods={['l']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Comment" mods={['l']}/>
      </div>
      <Button caption="Confirm" mods={['l']}/>
    </div>
  )
}

export default Checkout;
