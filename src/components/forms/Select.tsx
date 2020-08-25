import React, {useState} from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Dropdown} from '../popups';
import {Anchor} from '../buttons';
import {Icon} from '../misc';

export const Select: React.FC<Forms.ISelect> = ({value, items = [], ...props}) => {
  // const [isVisible, setIsVisible] = useState(false);
  const classBase = 'rcy-select';
  const className = bemClasses(classBase, defaultSize(props.mods), props.className);
  const textValue = items.find(item => item.id === value)?.caption;
  const iconName = 'angle-down';
  return (
    <Dropdown
      opener={
        <Anchor
          className={`${classBase}__value`}
          mods={props.mods}
          onClick={() => void 0}
        >
          {textValue}
          <Icon name={iconName}/>
        </Anchor>
      }
      className={className}
      itemClassName={`${classBase}__item`}
      items={items.map(item =>
        <Anchor mods={props.mods} className={`${classBase}__button`}>{item.caption}</Anchor>)
      }
    />
  );
};
