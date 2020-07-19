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
        if ('caption' in (button as Lists.ToolbarButton)) {
          if ((button as Lists.ToolbarButton).anchor) {
            return <Anchor {...button} key={i}>{(button as Lists.ToolbarButton).caption}</Anchor>;
          } else {
            return <Button {...button} key={i}>{(button as Lists.ToolbarButton).caption}</Button>;
          }
        } else {
          return button;
        }
      })}
    </List>
  );
};
