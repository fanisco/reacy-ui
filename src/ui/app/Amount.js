import React from 'react';
import {Button, Input, Icon} from 'reacy-ui';
import './Amount.scss';

const Amount = ({amount, onChange}) => {
  const increment = e => e.preventDefault() || onChange(amount + 1);
  const decrement = e => e.preventDefault() || onChange(amount - 1);
  return (
    <div className="amount">
      <Button
        mods={['sm', 'stackedRight']}
        onClick={decrement}
      ><Icon name="minus" size="lg"/></Button>
      <Input
        type="text"
        value={amount}
        mods={['sm', 'textCenter', 'square', 'paddingX0']}
        onChange={e => onChange(e.target.value)}
      />
      <Button
        mods={['sm', 'stackedLeft']}
        onClick={increment}
      ><Icon name="plus" size="lg"/></Button>
    </div>
  )
}

export default Amount;
