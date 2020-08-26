import React, {Component} from 'react';
import {Context} from './Context';
import {Manager} from './Manager';

export class Provider extends Component {
  private readonly popupManager: Manager;
  constructor(props: any, context: any) {
    super(props, context);
    this.popupManager = props.popupManager || new Manager();
  }
  render() {
    return (
      <Context.Provider value={{popupManager: this.popupManager}}>
        {this.props.children}
      </Context.Provider>
    );
  }
};
