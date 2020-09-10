import React, {useState} from 'react';
import {Buttons, Forms} from 'reacy-ui';
import './Cart.scss';

const fields = [{
  name: 'street',
  type: 'string',
  placeholder: 'Street'
}, {
  name: 'house',
  type: 'string',
  placeholder: 'House'
}, {
  name: 'flat',
  type: 'string',
  placeholder: 'Flat'
}, {
  name: 'comment',
  type: 'textarea',
  placeholder: 'Comment'
}];

const Checkout = () => {
  const [data, setData] = useState({street: '', house: '', flat: '', comment: ''});
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <Forms.Form
        fields={fields}
        data={data}
        wrap={true}
        onChange={(name, value) => setData({...data, [name]: value})}
      />
      <Buttons.Button mods={['primary', 'xl', 'shadow']}>Confirm</Buttons.Button>
    </div>
  )
};

export default Checkout;
