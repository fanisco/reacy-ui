import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {SizeMods, StyleMods} from '../../common/mods';

export const Field: React.FC<Forms.IFormItem> = ({title, type, mods, children, ...props}) => {
  return (
    <div className={bemClasses('rcy-field', mods && mods.filter(mod => AvaialableMods.includes(mod)), props.className)}>
      {title ? <span className="rcy-field__caption">{title + (type !== 'switch' ? ':' : '')}</span> : ''}
      {children}
    </div>
  );
};

export const AvaialableMods: string[] = [
  ...Object.keys(SizeMods),
  ...Object.keys(StyleMods)
];
