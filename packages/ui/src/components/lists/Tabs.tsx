import React from 'react';
import {Lists} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {List} from './List';
import {Button} from '../buttons';

export const Tabs: React.FC<Lists.ITabs> = ({activeId, items, onClick, ...props}) => {
  const mods = defaultSize(props.mods);
  const activityMod = 'active';
  const classBase = 'rcy-tabs';
  const className = bemClasses(classBase, mods, props.className);
  const itemMods = mods.filter(mod => mod !== activityMod);
  return (
    <List className={className} mods={[...mods, 'flex-rows']}>
      {items.map(item => {
        const mods = [...itemMods];
        if (activeId === item.id) {
          mods.push(activityMod);
        }
        return <Button
          className={bemClasses(`${classBase}__item`, mods)}
          onClick={() => onClick && onClick(item.id)}
        >
          {item.caption}
        </Button>
      })}
    </List>
  );
};
