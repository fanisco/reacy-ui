import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Context} from './Context';
import {Manager} from './Manager';
import {Root} from './Root';
import {config} from '../../../config';

export class Provider extends Component {
  private readonly popupManager: Manager;
  private readonly container: HTMLElement;
  constructor(props: any, context: any) {
    super(props, context);
    this.popupManager = props.popupManager || new Manager();
    // Use extra container
    this.container = document.getElementById(config.popups.container);
    if (!this.container) {
      throw Error(`Container element "#${config.popups.container}" is not presented in DOM. Unable to create popups.`);
    }
    // Position container
    this.container.style.position = 'fixed';
    this.container.style.left = '0';
    this.container.style.right = '0';
    this.container.style.bottom = '0';
  }
  render() {
    return (
      <Context.Provider value={{popupManager: this.popupManager}}>
        <>
          {ReactDOM.createPortal(<Root area={config.popups.area}/>, this.container)}
          {this.props.children}
        </>
      </Context.Provider>
    );
  }
};
