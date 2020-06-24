import React from 'react';
import {bemClasses} from '../../core/bem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Button.scss';

const Button = ({caption, onClick, href, children, icon, ...props}) => {
  const className = bemClasses({
    ...props,
    base: 'button'
  });
  let iconComponent = '';
  if (icon) {
    iconComponent = <FontAwesomeIcon className="button__icon" icon={icon}/>;
  }
  if (href) {
    return <a className={className} onClick={onClick} href={href}>{iconComponent}{caption}{children}</a>;
  } else {
    return <button className={className} onClick={onClick}>{iconComponent}{caption}{children}</button>;
  }
}

export default Button;
