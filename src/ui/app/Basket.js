import React, {useContext} from 'react';
import SpaButton from '../kit/SpaButton';
import {Context} from '../../state/Context';
import './Basket.scss';

const Basket = () => {
  const {state} = useContext(Context);
  return (
    <SpaButton caption={`Cart | ${state.cart.length}`} href="/cart"/>
  )
}

export default Basket;
