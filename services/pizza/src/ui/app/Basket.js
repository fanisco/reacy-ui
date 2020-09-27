import React, {useContext} from 'react';
import SpaButton from '../kit/buttons/SpaButton';
import {Context} from '../../state/Context';
import './Basket.scss';

const Basket = () => {
  const {state} = useContext(Context);
  const amount = state.cart.length ? <div className="basket__amount">{state.cart.length}</div> : '';
  return (
    <SpaButton className="basket" href="/cart" mods={['primary', 'lg', 'shadow', 'rounded']}>
      Cart{amount}
    </SpaButton>
  )
};

export default Basket;
