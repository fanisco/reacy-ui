import React, {Component} from 'react';

import {Core} from '../../common/interfaces';
import {Forms} from './interfaces';
import {bemClasses, defaultSize} from '../../common/bem';

import {Dropdown} from '../popups';
import {Anchor} from '../buttons';
import {Icon} from '../misc';

export class Select extends Component<Forms.ISelect> {

  state = {
    isOpen: false
  };
  node: Element;
  classBase: string = 'rcy-select';

  constructor(p: Forms.ISelect) {
    super(p);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onOpenerClick = this.onOpenerClick.bind(this);
    this.onValueClick = this.onValueClick.bind(this);
  }

  open() {
    this.setState({...this.state, isOpen: true});
  }

  close() {
    this.setState({...this.state, isOpen: false});
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick, false);
  }

  onDocumentClick(e: Event) {
    if (!this.node.contains(e.target as Element)) {
      this.close();
    }
  }

  onOpenerClick(e: Event) {
    e.preventDefault();
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  onValueClick(item: Core.IListItem) {
    if (this.props.onChange) {
      this.props.onChange(item.id);
    }
    this.close();
  }

  render() {
    const {value, items = [], mods = [], disabled} = this.props;
    const className = bemClasses(this.classBase, [...defaultSize(mods), this.state.isOpen ? 'open' : ''], this.props.className);
    const textValue = items.find(item => item.id === value)?.caption;
    const iconName = this.state.isOpen ? 'angle-up' : 'angle-down';
    return (
      <div className={className} ref={node => this.node = node}>
        <Anchor
          onClick={this.onOpenerClick}
          className={`${this.classBase}__value`}
          mods={[...mods, this.state.isOpen ? 'pressed' : '']}
          disabled={disabled || !items.length}>
          {textValue}
          <Icon name={iconName}/>
        </Anchor>
        <Dropdown
          isOpen={this.state.isOpen}
          className={`${this.classBase}__dropdown`}
          itemClassName={`${this.classBase}__item`}
          items={items.map(item =>
            <Anchor
              onClick={() => this.onValueClick(item)}
              className={`${this.classBase}__button`}
              mods={[...mods, ...(item.id === value ? ['active', 'bold'] : [])]}>
              {item.caption}
              {item.id === value ? <Icon name="check"/> : ''}
            </Anchor>
          )}
        />
      </div>
    );
  }
}
