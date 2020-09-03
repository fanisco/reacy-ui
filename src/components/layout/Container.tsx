import React from 'react';
import {Layout} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Container: React.FC<Layout.IContainer> = ({children, ...props}) => {
  const classBase = 'rcy-container';
  const className = bemClasses(classBase, props.mods, props.className);
  return (
    <div className={className}>
      {children}
    </div>
  );
};
