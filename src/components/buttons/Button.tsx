import React from 'react';
import {Buttons} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Button: React.FC<Buttons.IButton> = ({onClick, href, children, disabled = false, ...props}) => {
  const className = bemClasses('rcy-button', props.mods, props.className);
  if (href) {
    return <a onClick={onClick} href={href} className={className}>{children}</a>;
  } else {
    return <button onClick={onClick} className={className} disabled={disabled}>{children}</button>;
  }
};
