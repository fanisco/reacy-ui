import {Popup} from './Popup';

export interface IPopupControl {
  id: string;
  open(): void;
  close(): void;
  isOpen: boolean;
}

export interface IPopupCreateOptions<T> {
  component: React.ComponentType<T>;
  opener?: React.Component & IOpener,
  props?: React.ComponentProps<any>;
  area?: string;
  id?: string;
  closeOnClickOutside?: boolean
}

export interface IManager {
  popups: Array<Popup>;
  create<T>(options: IPopupCreateOptions<T>): IPopupControl; 
  open(id: string): void;
  close(id: string): void;
  closeAll(): void;
  closeOther(node: Element): void;
  subscribe(fn: Function): void;
  unsubscribe(fn: Function): void;
}

export interface IPopupProps {
    onClose?: (...args: any[]) => any;
    isOpen?: boolean;
    zIndex?: number;
}

export interface IOpener {
  node: Element;
}

export interface IOpenerProps {
  popupManager: IManager;
}
