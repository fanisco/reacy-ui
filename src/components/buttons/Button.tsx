import React from 'react';
import {Buttons} from 'common/interfaces';
import {bemClasses} from 'common/bem';

export const Button: React.FC<Buttons.IButton> = ({onClick, href, children, mods, disabled = false, ...props}) => {
  const className = bemClasses('rcy-button', mods, props.className);
  if (href) {
    return <a onClick={onClick} href={href} className={className}>{children}</a>;
  } else {
    return <button onClick={onClick} className={className} disabled={disabled}>{children}</button>;
  }
};
