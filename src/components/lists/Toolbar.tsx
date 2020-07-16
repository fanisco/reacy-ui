import React from 'react';
import {Lists} from '../../common/interfaces';
import {bemClasses, defaultMods} from '../../common/bem';
import {List} from './List';
import {Button} from '../buttons';

export const Toolbar: React.FC<Lists.IToolbar> = ({items, ...props}) => {
  const mods = defaultMods(props.mods);
  const classBase = 'rcy-toolbar';
  const className = bemClasses(classBase, mods, props.className);
  return (
    <List className={className} mods={[...mods, 'flex-columns']}>
      {items.map((item, i) => {
        return <Button {...item} key={i}>{item.caption}</Button>
      })}
    </List>
  );
};
