import React from 'react';
import {Button, Input} from 'reacy-ui';
import './Cart.scss';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__field">
        <Input placeholder="Street" mods={['lg']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="House" mods={['lg']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Flat" mods={['lg']}/>
      </div>
      <div className="checkout__field">
        <Input placeholder="Comment" mods={['lg']}/>
      </div>
      <Button caption="Confirm" mods={['lg']}/>
    </div>
  )
};

export default Checkout;
