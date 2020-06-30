import {Mods} from './types';

export namespace Core {
  export interface IStyled {
    mods?: Mods;
  }
  export interface IComponent {
    mods?: string[];
    className?: string;
  }
}

export namespace Buttons {
  export interface IButton extends Core.IComponent{
    caption: string;
    onClick: (e: any) => void;
    href: string;
    icon: any;
  }
}

export namespace Form {
  export interface IInput extends Core.IComponent {
    type: 'text'|'email';
    value: any;
    placeholder: 'string';
    disabled: boolean;
    constraint: string;
    onChange: (e: any) => void;
  }
}

export namespace Tables {
  type Cell = {
    id: string;
    align?: string;
    caption: string;
    template?: Function;
  };
  type Column = Cell & {
    width?: string;
  }
  type Footer = Cell & {
    colspan?: number;
  };
  export interface ITable extends Core.IComponent {
    rows: any[];
    columns: Column[];
    footer: Footer[];
  }
  export interface IHeader extends Core.IComponent {
    columns: Column[];
  }
  export interface IFooter extends Core.IComponent {
    footer: Footer[];
  }
  export interface IRow extends Core.IComponent {
    row: any;
    columns: Column[];
  }
  export interface ICell extends Core.IComponent {
    row: any;
    column: Cell;
  }
}

export namespace Icons {
  export interface IIcon {
    name: string;
    size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    align?: string;
  }
}

export namespace Misc {
  export interface Empty {
    heading: string;
    text: string;
  }
}
