import React from 'react';
import {Misc} from './interfaces';
import {bemClasses, defaultMods} from '../../common/bem';

export const Alert: React.FC<Misc.IAlert> = ({...props}) => {
  const className = bemClasses('rcy-alert', defaultMods(props.mods), props.className);
  return <div className={className}>{props.children}</div>;
};
