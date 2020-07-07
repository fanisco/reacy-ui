import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Input: React.FC<Forms.IInput> = ({value, name, placeholder, type = 'text', disabled = false, ...props}) => {
  const className = bemClasses('rcy-input', props.mods, props.className);
  return (
    <input className={className}
           type={type}
           name={name}
           value={value}
           disabled={disabled}
           placeholder={placeholder}
           onKeyDown={props.onKeyDown}
           onKeyUp={props.onKeyUp}
           onKeyPress={props.onKeyPress}
           onChange={e => {
             if (props.onChange) {
               props.onChange(e.target.value)
             }
           }}
    />
  );
};
