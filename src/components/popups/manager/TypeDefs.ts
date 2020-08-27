import {Popup} from './Popup';

export interface IPopupControl {
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
}

export interface IPopupProps {
    onClose?: (...args: any[]) => any;
    isOpen?: boolean;
}

export interface IOpener {
  node: Element;
}

export interface IOpenerProps {
  popupManager: IManager;
}
