import React from 'react';
import {Forms} from './interfaces';
import {bemClasses, defaultSize, filterMods} from '../../common/bem';
import {SizeMods, StyleMods} from '../../common/mods';
import {Alert} from '../misc';

export const Field: React.FC<Forms.IField> = ({type, title, errors, mods, children, ...props}) => {
  const appliableMods: string[] = [
    type,
    ...filterMods(defaultSize(mods), AvaialableMods)
  ];
  return (
    <div className={bemClasses('rcy-field', appliableMods, props.className)}>
      {title ? <span className="rcy-field__caption">{title}</span> : null}
      {children}
      {errors ? <Alert mods={['danger']}>{errors}</Alert> : null}
    </div>
  );
};

export const AvaialableMods: string[] = [
  ...Object.keys(SizeMods),
  ...Object.keys(StyleMods)
];
