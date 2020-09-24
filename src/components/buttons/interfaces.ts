import {Core} from '../../common/interfaces';

export namespace Buttons {
  export interface IStyledButton extends Core.IStyled {}
  export interface IButton extends Core.IStyled, Core.IComponent {
    onClick?: (e: any) => void;
    href?: string;
    disabled?: boolean;
    title?: string;
  }
}
