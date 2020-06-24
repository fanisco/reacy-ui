import React from 'react';
import './Input.scss';

const Input = ({type = "text", value, placeholder, disabled}) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
