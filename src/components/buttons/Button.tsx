import React from 'react';
import {Buttons} from './interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Anchor} from './Anchor';

export const Button: React.FC<Buttons.IButton> = ({onClick, children, disabled = false, ...props}, ...args) => {
  if ('href' in props) {
    return Anchor({onClick, children, disabled, ...props}, ...args);
  }
  const className = bemClasses('rcy-button', defaultSize(props.mods), props.className);
  return <button onClick={onClick} className={className} disabled={disabled} title={props.title}>{children}</button>;
};
