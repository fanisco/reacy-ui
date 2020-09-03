import React, {useState} from 'react';
import {Layout} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Container: React.FC<Layout.IContainer> = ({children, ...props}) => {
  const st = useState(1);
  console.log(st);
  const classBase = 'rcy-container123';
  const className = bemClasses(classBase, props.mods, props.className);
  return (
    <div className={className}>
      {children}
    </div>
  );
};
