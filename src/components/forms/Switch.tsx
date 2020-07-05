import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Switch: React.FC<Forms.ISwitch> = ({value, name, onChange, disabled = false, ...props}) => {
  const className = bemClasses('rcy-switch', props.mods, props.className);
  return (
    <label className={className}>
      <div className="rcy-switch__trigger"/>
      <div className="rcy-switch__hidden">
        <input type="checkbox"
               name={name}
               checked={value}
               disabled={disabled}
               onChange={() => {
                 if (onChange) {
                   onChange(!value)
                 }
               }}
        />
      </div>
    </label>
  )
};
