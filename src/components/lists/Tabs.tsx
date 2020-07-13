import React from 'react';
import {Lists} from '../../common/interfaces';
import {bemClasses, defaultMods} from '../../common/bem';
import {StyleMods} from '../../common/mods';
import {List} from './List';
import {Button} from '../buttons';

export const Tabs: React.FC<Lists.ITabs> = ({activeId, items, onClick, ...props}) => {
  const mods = defaultMods(props.mods);
  const classBase = 'rcy-tabs';
  const className = bemClasses(classBase, mods, props.className);
  const activityMod = mods.find(mod => mod in StyleMods) || StyleMods.primary;
  const itemMods = mods.filter(mod => !(mod in StyleMods));
  return (
    <List className={className} mods={[...mods, 'flex-rows']}>
      {items.map(item => {
        const mods = [...itemMods, 'underline'].filter(mod => mod !== null);
        if (activeId === item.id) {
          mods.push(activityMod);
        }
        return <Button
          className={`${classBase}__item`}
          mods={mods}
          onClick={() => onClick && onClick(item.id)}
        >
          {item.caption}
        </Button>
      })}
    </List>
  );
};
