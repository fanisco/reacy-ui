import React from 'react';
import {Misc} from './interfaces';
import {bemClasses, defaultMods} from '../../common/bem';
import {Button} from '../buttons';
import {Icon} from './Icon';

export const Reference: React.FC<Misc.IReference> = ({title, descr, ...props}) => {
  const classBase = 'rcy-reference';
  const className = bemClasses(classBase, defaultMods(props.mods), props.className);
  return (
    <div className={className}>
      <div className={`${classBase}__body`}>
        <h6 className={`${classBase}__title`}>{title}</h6>
        <p className={`${classBase}__descr`}>{descr}</p>
      </div>
      <Button className={`${classBase}__close`} mods={['inline', ...(props.mods || [])]} onClick={props.onCloseClick}>
        <Icon name="times"/>
      </Button>
    </div>
  );
};
