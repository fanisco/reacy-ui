import React, {useContext} from 'react';
import Button from '../kit/Button';
import {Context} from '../../state/Context';
import './Basket.scss';

const Basket = () => {
  const {state} = useContext(Context);
  return (
    <Button caption={`Cart | ${state.cart.length}`}/>
  )
}

export default Basket;
