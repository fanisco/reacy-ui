import React from 'react';

import {IPopupProps} from '../popups';
import {Popups} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {List} from '../lists';

export const Dropdown: React.FC<Popups.IDropdown & IPopupProps> = ({isOpen, zIndex, items = [], ...props}) => {
  const classBase = 'rcy-dropdown';
  const className = bemClasses(classBase, props.mods, `${props.className} ${!isOpen ? 'rcy-hidden' : ''}`);
  return (
    <div className={className} style={{zIndex}}>
      <List
        className={`${classBase}__list`}
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
