import {Popup} from './Popup';
import {IManager} from './TypeDefs';
import {generateGuid} from '../../../common/generateGuid';
import {config} from '../../../config';

export class Manager implements IManager {

  private allPopups: Popup[] = [];
  private openPopups: Popup[] = [];
  private subscribers: Function[] = [];

  get popups(): Array<Popup> {
    return [...this.openPopups];
  }

  subscribe(fn: Function): void {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: Function): void {
    this.subscribers.slice(this.subscribers.findIndex(f => f === fn), 1);
  }

  private dispatch(eventName: string, ...args: any[]): void {
    this.subscribers.forEach(fn => fn.call(null, ...args));
  }

  private getZIndex(area: string): number {
    return Math.max(
      ...this.openPopups
        .filter(popup => popup.area === area)
        .map(popup => popup.props.zIndex) as number[],
      1
    );
  }

  create<T>({
    component,
    opener,
    props,
    area = config.popups.area,
    id = generateGuid(),
    closeOnClickOutside = false
  }) {
    // Create new
    const popup = new Popup(
      component,
      opener,
      props,
      area,
      id,
      closeOnClickOutside
    );
    this.allPopups.push(popup);
    // Return control
    return {
      id,
      open: () => this.open(id),
      close: () => this.close(id),
      get isOpen(): boolean {
        return popup.isOpen;
      }
    };
  }

  open(id: string) {
    const popup = this.allPopups.find(popup => popup.id === id);
    popup.props = {
      ...popup.props,
      zIndex: this.getZIndex(popup.area),
      onClose: () => this.close(id)
    };
    popup.open();
    if (!this.openPopups.includes(popup)) {
      this.openPopups.push(popup);
      this.dispatch('open', popup);
    }
  }

  close(popupId: string): void {
    const index = this.openPopups.findIndex(
      ({id}) => id === popupId,
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
    // this.openPopups.forEach(popup => {
    //   if (!popup.opener?.node?.contains(node)) { // FixMe!
    //     this.close(popup.id);
    //   }
    // });
  }
};
