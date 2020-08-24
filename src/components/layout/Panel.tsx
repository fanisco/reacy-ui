import React from 'react';
import {Layout} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';

export const Panel: React.FC<Layout.IContainer> = ({children, ...props}) => {
  const classBase = 'rcy-panel';
  const className = bemClasses(classBase, defaultSize(props.mods), props.className);
  return (
    <div className={className}>
      {children}
    </div>
  );
};
