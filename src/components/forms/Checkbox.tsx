import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Icon} from '../misc';

export const Checkbox: React.FC<Forms.ISwitch> = ({value, name, onChange, disabled = false, ...props}) => {
  const classBase = 'rcy-checkbox';
  const className = bemClasses(classBase, defaultSize(props.mods), props.className);
  return (
    <label className={className}>
      <input className={`${classBase}__input`}
             type="checkbox"
             name={name}
             checked={value}
             disabled={disabled}
             onChange={() => {
               if (onChange) {
                 onChange(!value)
               }
             }}
      />
      <Icon name="check" align="top" className={`${classBase}__icon`}/>
    </label>
  )
};
