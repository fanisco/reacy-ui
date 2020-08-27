import React, {Component} from 'react';

import {Core, Forms} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {generateGuid} from '../../common/generateGuid';

import {Root, withPopups, IOpener, IOpenerProps} from '../popups';
import {IPopupControl} from '../popups/manager/TypeDefs';
import {Dropdown} from '../popups';
import {Anchor} from '../buttons';
import {Icon} from '../misc';

class Select extends Component<Forms.ISelect & IOpenerProps, {isDropdownVisible: boolean}> implements IOpener {

  id: string = `select_${generateGuid()}`;
  node: Element;
  classBase: string = 'rcy-select';
  dropdown: IPopupControl;

  constructor(p: Forms.ISelect & IOpenerProps) {
    super(p);
    this.onOpenerClick = this.onOpenerClick.bind(this);
    this.onValueClick = this.onValueClick.bind(this);
  }

  onOpenerClick(e: Event) {
    e.preventDefault();
    const id = this.id;
    const area = this.id;
    if (!this.dropdown) {
      this.dropdown = this.props.popupManager.create({
        component: Dropdown,
        opener: this,
        props: {
          className: `${this.classBase}__dropdown`,
          itemClassName: `${this.classBase}__item`,
          items: this.props.items.map(item =>
            <Anchor className={`${this.classBase}__button`} mods={this.props.mods} onClick={() => this.onValueClick(item)}>
              {item.caption}
            </Anchor>
          )},
        area,
        id,
        closeOnClickOutside: true
      });
    }
    if (this.dropdown.isOpen) {
      this.props.popupManager.close(id);
    } else {
      this.props.popupManager.open(id);
    }
  }

  onValueClick(item: Core.IListItem) {
    if (this.props.onChange) {
      this.props.onChange(item.id);
    }
    this.dropdown.close();
  }

  render() {
    const {value, items = [], mods} = this.props;
    const className = bemClasses(this.classBase, defaultSize(mods), this.props.className);
    const textValue = items.find(item => item.id === value)?.caption;
    const iconName = 'angle-down';
    return (
      <div className={className} ref={node => this.node = node}>
        <Anchor className={`${this.classBase}__value`} mods={mods} onClick={this.onOpenerClick} disabled={!items.length}>
          {textValue}
          <Icon name={iconName}/>
        </Anchor>
        <Root area={this.id}/>
      </div>
    );
  }
}

const wrappedSelect = withPopups()(Select);
export {wrappedSelect as Select};
