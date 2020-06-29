import React from 'react';
import {Button, Input} from 'reacy-ui';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Amount.scss';

const Amount = ({amount, onChange}) => {
  const increment = e => e.preventDefault() || onChange(amount + 1);
  const decrement = e => e.preventDefault() || onChange(amount - 1);
  return (
    <div className="amount">
      <Button
        icon={faMinus}
        mods={['sm', 'bordered', 'gray', 'narrow', 'stacked-right']}
        onClick={decrement}
      />
      <Input
        type="text"
        value={amount}
        mods={['sm', 'bordered', 'narrow', 'text-center', 'roundness-none', 'eased', 'padding-x0']}
        onChange={e => onChange(e.target.value)}
      />
      <Button
        icon={faPlus}
        mods={['sm', 'bordered', 'gray', 'narrow', 'stacked-left']}
        onClick={increment}
      />
    </div>
  )
}

export default Amount;
