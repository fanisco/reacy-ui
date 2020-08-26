import {Popup} from './Popup';

export interface IPopupControl {
  open(): void;
  close(): void;
  isOpen: boolean;
}

export interface IManager {
  popups: Array<Popup>;
  create<T>(
    componentClass: React.ComponentType<T>,
    popupProps?: object,
    area?: string,
    id?: string
  ): IPopupControl; 
  open(id: string): void;
  close(id: string): void;
  closeAll(): void;
  closeOther(node: Element): void;
}

export interface IPopupProps {
    onClose?: (...args: any[]) => any;
    isOpen?: boolean;
}

export interface IOpenerProps {
  popupManager: IManager;
}
