import React from 'react';
import {bemClasses} from '../../core/bem';
import './Input.scss';

const Input = ({type = "text", value, placeholder, disabled, ...props}) => {
  const className = bemClasses({
    ...props,
    base: 'input'
  });
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
