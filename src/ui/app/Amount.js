import React from 'react';
import {Buttons, Forms, Misc} from 'reacy-ui';
import './Amount.scss';

const Amount = ({amount, onChange}) => {
  const increment = e => e.preventDefault() || onChange(amount + 1);
  const decrement = e => e.preventDefault() || onChange(amount - 1);
  return (
    <div className="amount">
      <Buttons.Button
        mods={['sm', 'stackedRight']}
        onClick={decrement}
      ><Misc.Icon name="minus" size="lg"/></Buttons.Button>
      <Forms.Input
        type="text"
        value={amount}
        mods={['sm', 'textCenter', 'square', 'paddingX0']}
        onChange={e => onChange(e.target.value)}
      />
      <Buttons.Button
        mods={['sm', 'stackedLeft']}
        onClick={increment}
      ><Misc.Icon name="plus" size="lg"/></Buttons.Button>
    </div>
  )
}

export default Amount;
