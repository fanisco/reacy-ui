import React from 'react';
import {bemClasses} from './bem';
import './Button.scss';

const Button = ({caption, onClick, href, children, className, mod}) => {
  const classNameFinal = bemClasses({
    base: 'button',
    mods: [mod],
    adds: [className]
  });
  if (href) {
    return <a className={classNameFinal} onClick={onClick} href={href}>{caption}{children}</a>;
  } else {
    return <button className={classNameFinal} onClick={onClick}>{caption}{children}</button>;
  }
}

export default Button;
