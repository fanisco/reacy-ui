import React from 'react';
import './Button.scss';

const Button = ({caption, onClick, href}) => {
  if (href) {
    return <a className="button" onClick={onClick} href={href}>{caption}</a>;
  } else {
    return <button className="button" onClick={onClick}>{caption}</button>;
  }
}

export default Button;
