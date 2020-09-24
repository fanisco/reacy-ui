import {IOpener, IPopupProps} from './TypeDefs';

export class Popup  {
  private _isOpen: boolean;

  constructor(
    public Component: any,
    public opener: React.Component & IOpener,
    public props: IPopupProps,
    public area: string,
    public id: string,
    public closeOnClickOutside: boolean = true
  ) {
    this._isOpen = false;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  open() {
    this._isOpen = true;
  }

  close() {
    this._isOpen = false;
  }
}
