import {Core} from '../../common/interfaces';

export namespace Misc {
  export interface IAlert extends Core.IComponent {

  }
  export interface IBubble extends Core.IComponent {

  }
  export interface IIcon {
    name: string;
    size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    align?: string;
    className?: string;
  }
  export interface IReference extends Core.IComponent {
    id: string | number;
    title: string;
    descr: string;
    href?: string;
    onCloseClick?: (e: any) => void;
  }
}
