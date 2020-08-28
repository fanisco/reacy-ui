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
    this.onDropdownChange = this.onDropdownChange.bind(this);
    this.onOpenerClick = this.onOpenerClick.bind(this);
    this.onValueClick = this.onValueClick.bind(this);
  }

  componentDidMount() {
    this.props.popupManager.subscribe(this.onDropdownChange);
  }
  componentWillUnmount() {
    this.props.popupManager.unsubscribe(this.onDropdownChange);
  }

  onDropdownChange() {
    this.forceUpdate();
  }

  onOpenerClick(e: Event) {
    e.preventDefault();
    const id = this.id;
    const area = this.id;
    const {items = [], mods = [], value} = this.props;
    if (!this.dropdown) {
      this.dropdown = this.props.popupManager.create({
        component: Dropdown,
        opener: this,
        props: {
          className: `${this.classBase}__dropdown`,
          itemClassName: `${this.classBase}__item`,
          items: items.map(item =>
            <Anchor onClick={() => this.onValueClick(item)} className={`${this.classBase}__button`} mods={[...mods, item.id === value ? 'primary' : '']}>
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
    const isOpen = !!this.dropdown?.isOpen;
    const {value, items = [], mods = []} = this.props;
    const className = bemClasses(this.classBase, [...defaultSize(mods), isOpen ? 'open' : ''], this.props.className);
    const textValue = items.find(item => item.id === value)?.caption;
    const iconName = isOpen ? 'angle-up' : 'angle-down';
    return (
      <div className={className} ref={node => this.node = node}>
        <Anchor onClick={this.onOpenerClick} className={`${this.classBase}__value`} mods={[...mods, isOpen ? 'pressed' : '']} disabled={!items.length}>
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
