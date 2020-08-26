export class Popup {
  private _isOpen: boolean;

  constructor(
    public ComponentClass: any,
    public props: object,
    public area: string,
    public id: string,
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
