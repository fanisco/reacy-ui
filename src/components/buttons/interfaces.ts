import {Core} from '../../common/interfaces';

export namespace Buttons {
  export interface IButton extends Core.IComponent {
    onClick?: (e: any) => void;
    href?: string;
    disabled?: boolean;
    title?: string;
  }
}
