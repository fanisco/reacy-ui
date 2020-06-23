import React from 'react';
import Button from '../kit/Button';
import './Amount.scss';

const Amount = ({amount, onChange}) => {
  return (
    <div className="amount">
      <Button caption="-" onClick={e => {
        e.preventDefault();
        onChange(amount - 1);
      }}/>
      <input type="text" value={amount} onChange={e => onChange(e.target.value)}/>
      <Button caption="+" onClick={e => {
        e.preventDefault();
        onChange(amount + 1);
      }}/>
    </div>
  )
}

export default Amount;
