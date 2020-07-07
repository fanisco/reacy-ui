import React from 'react';
import {Misc} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {Button} from '../buttons';
import {Icon} from './Icon';

export const Reference: React.FC<Misc.IReference> = ({text, ...props}) => {
  const classBase = 'rcy-reference';
  const className = bemClasses(classBase, props.mods, props.className);
  return (
    <div className={className}>
        <p className={`${classBase}__text`}>{text}</p>
        <Button className={`${classBase}__close`} mods={['inline', ...(props.mods || [])]} onClick={props.onCloseClick}>
          <Icon name="times"/>
        </Button>
    </div>
  );
};
