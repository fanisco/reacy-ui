import React from 'react';
import {Misc} from './interfaces';
import {bemClasses, defaultMods} from '../../common/bem';

export const Bubble: React.FC<Misc.IBubble> = ({children, ...props}) => {
  const classBase = 'rcy-bubble';
  const className = bemClasses(classBase, defaultMods(props.mods), props.className);
  return (
    <span className={className}>{children}</span>
  );
};
