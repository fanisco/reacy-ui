import React from 'react';
import {Popups} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {List} from '../lists';

export const Dropdown: React.FC<Popups.IDropdown> = ({isVisible, opener, items = [], ...props}) => {
  console.log(opener);
  const classBase = 'rcy-dropdown';
  const className = bemClasses(classBase, props.mods, props.className);
  return (
    <div className={className}>
      {opener}
      <List
        className={`${classBase}__list ${!isVisible ? 'rcy-hidden' : ''}`}
        itemClassName={`${classBase}__item ${props.itemClassName ? props.itemClassName : ''}`}
      >
        {items.map(item => {
          if ('caption' in item) {
            return item.caption;
          } else {
            return item;
          }
        })}
      </List>
    </div>
  );
};
