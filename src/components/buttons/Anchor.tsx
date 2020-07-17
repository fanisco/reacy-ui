import React from 'react';
import {Buttons} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';

export const Anchor: React.FC<Buttons.IButton> = ({onClick, href, children, disabled = false, ...props}) => {
  const className = bemClasses('rcy-button', defaultSize(props.mods), props.className);
  return <a onClick={onClick} href={href} className={className} title={props.title}>{children}</a>;
};
