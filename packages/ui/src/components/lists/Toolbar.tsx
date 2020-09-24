import React from 'react';
import {Lists} from '../../common/interfaces';
import {bemClasses, defaultMods} from '../../common/bem';
import {List} from './List';
import {Button, Anchor} from '../buttons';

export const Toolbar: React.FC<Lists.IToolbar> = ({items, ...props}) => {
  const mods = defaultMods(props.mods);
  const classBase = 'rcy-toolbar';
  const className = bemClasses(classBase, mods, props.className);
  return (
    <List className={className} mods={[...mods, 'flex-rows', 'spacedX']} itemClassName={props.itemClassName}>
      {items.map((button, i) => {
        if ('caption' in (button as Lists.IToolbarButton)) {
          if ((button as Lists.IToolbarButton).anchor) {
            return <Anchor {...button} key={i}>{(button as Lists.IToolbarButton).caption}</Anchor>;
          } else {
            return <Button {...button} key={i}>{(button as Lists.IToolbarButton).caption}</Button>;
          }
        } else {
          return button;
        }
      })}
    </List>
  );
};
