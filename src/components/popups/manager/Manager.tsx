import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './Root';
import {Popup} from './Popup';
import {IManager} from './TypeDefs';
import {generateGuid} from '../../../common/generateGuid';

export class Manager implements IManager {

  private allPopups: Popup[] = [];
  private openPopups: Popup[] = [];
  private subscribers: Function[] = [];
  private mainArea: string = 'main';

  constructor() {
    // Use extra container
    const container: HTMLElement | null = document.getElementById('rcy-popups');
    if (!container) {
      throw Error('Container element "#rcy-popups" is not presented in DOM. Unable to create popups.');
    }
    // Position container
    container.style.position = 'fixed';
    container.style.left = '0';
    container.style.right = '0';
    container.style.bottom = '0';
    // Render
    ReactDOM.createPortal(<Root area={this.mainArea}/>, container);
  }

  get popups(): Array<Popup> {
    return [...this.openPopups];
  }

  subscribe(fn: Function): void {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: Function): void {
    this.subscribers.slice(this.subscribers.findIndex(f => f === fn), 1);
  }

  dispatch(eventName: string, ...args: any[]): void {
    this.subscribers.forEach(fn => fn.call(null, ...args));
  }

  create<T>(
    componentClass: React.ComponentType<T>,
    popupProps?: object,
    area: string = this.mainArea,
    id: string = generateGuid()
  ) {
    // Create new
    const popup = new Popup(componentClass, popupProps as any, area, id);
    this.allPopups.push(popup);
    // Return control
    return {
      open: () => this.open(id),
      close: () => this.close(id),
      get isOpen(): boolean {
        return popup.isOpen;
      }
    };
  }

  open(id: string) {
    const popup = this.allPopups.find(popup => popup.id === id);
    popup.open();
    if (!this.openPopups.includes(popup)) {
      this.openPopups.push(popup);
      this.dispatch('open', popup);
    }
  }

  close(id: string): void {
    const index = this.openPopups.findIndex(
      ({id}) => id === id,
    );
    if (index === -1) {
      return;
    }
    const popup = this.openPopups[index];
    this.openPopups.splice(index, 1);
    popup.close();
    this.dispatch('close', popup);
  }

  closeAll(): void {
    let closed = false;
    this.openPopups.forEach(popup => {
      popup.close();
      closed = true;
    });
    if (closed) {
      this.openPopups = [];
      this.dispatch('closeAll');
    }
  }

  closeOther(node: Element): void {
    console.log(node);
  }
};
