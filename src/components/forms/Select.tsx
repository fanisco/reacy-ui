import React, {Component} from 'react';
import {Core, Forms} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Dropdown} from '../popups';
import {Anchor} from '../buttons';
import {Icon} from '../misc';

export class Select extends Component<Forms.ISelect, {isDropdownVisible: boolean}> {

  constructor(p: Forms.ISelect) {
    super(p);
    this.state = {isDropdownVisible: false};
    this.onOpenerClick = this.onOpenerClick.bind(this);
    this.onValueClick = this.onValueClick.bind(this);
  }

  onOpenerClick(e: Event) {
    e.preventDefault();
    this.setState({...this.state, isDropdownVisible: !this.state.isDropdownVisible});
  }

  onValueClick(item: Core.IListItem) {
    if (this.props.onChange) {
      this.props.onChange(item.id);
    }
    this.setState({...this.state, isDropdownVisible: false});
  }

  render() {
    const {value, items = [], mods} = this.props;
    const classBase = 'rcy-select';
    const className = bemClasses(classBase, defaultSize(mods), this.props.className);
    const textValue = items.find(item => item.id === value)?.caption;
    const iconName = 'angle-down';
    return (
      <Dropdown
        isVisible={this.state.isDropdownVisible}
        opener={
          <Anchor className={`${classBase}__value`} mods={mods} onClick={this.onOpenerClick} disabled={!items.length}>
            {textValue}
            <Icon name={iconName}/>
          </Anchor>
        }
        className={className}
        itemClassName={`${classBase}__item`}
        items={items.map(item =>
          <Anchor className={`${classBase}__button`} mods={mods} onClick={() => this.onValueClick(item)}>
            {item.caption}
          </Anchor>
        )}
      />
    );
  }
}
