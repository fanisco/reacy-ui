import React from 'react';
import './Button.scss';

const Button = ({caption, onClick}) => {
  return <button className="button" onClick={onClick}>{caption}</button>
}

export default Button;
