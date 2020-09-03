import React from 'react';
import {Forms} from './interfaces';
import {bemClasses} from '../../common/bem';

export const Group: React.FC<Forms.IGroup> = ({name, title, children, ...props}) => {
  const classBase = 'rcy-group';
  const className = bemClasses(classBase, props.mods, props.className);
  return (
    <fieldset className={className} name={name}>
      {title ? <h5 className={`${classBase}__title`}>{title}</h5> : ''}
      {children}
    </fieldset>
  );
};
