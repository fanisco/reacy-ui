import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {SizeMods, StyleMods} from '../../common/mods';

export const Field: React.FC<Forms.IFormItem> = ({title, type, mods, children, ...props}) => {
  const appliableMods: string[] = [
    type,
    ...(mods && mods.filter(mod => AvaialableMods.includes(mod)) || [])
  ];
  return (
    <div className={bemClasses('rcy-field', appliableMods, props.className)}>
      {title ? <span className="rcy-field__caption">{title}</span> : ''}
      {children}
    </div>
  );
};

export const AvaialableMods: string[] = [
  ...Object.keys(SizeMods),
  ...Object.keys(StyleMods)
];
