import React, {useState} from 'react';
import {Forms} from './interfaces';
import {useBem} from '../../hooks/useBem';
import {SizeMods} from '../../common/mods';

export const Input: React.FC<Forms.IInput> = ({value, name, placeholder, type = 'text', disabled = false, ...props}) => {
  const [focused, setFocused] = useState(false);
  const className = useBem({
    cBase: 'rcy-input',
    cName: props.className,
    mods: [props.mods, focused && 'focused', disabled && 'disabled'],
    defSize: SizeMods.md
  });
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={e => {
        setFocused(true);
        if (props.onFocus) {
          props.onFocus(e);
        }
      }}
      onBlur={e => {
        setFocused(false);
        if (props.onBlur) {
          props.onBlur(e);
        }
      }}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
    />
  );
};
