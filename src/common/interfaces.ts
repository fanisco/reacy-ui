import React from 'react';
import {HashMap} from './types';

export namespace Core {
  export interface IComponent {
    mods?: string[];
    className?: string;
  }
}

export namespace Buttons {
  export interface IButton extends Core.IComponent {
    onClick?: (e: any) => void;
    href?: string;
    disabled?: boolean;
    title?: string;
  }
}

export namespace Forms {
  export interface IFormItem extends Core.IComponent {
    name: string;
    type: string;
    title?: string;
    group?: string;
    disabled?: boolean;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    onKeyPress?: (e: any) => void;
    onChange?: (e: any) => void;
    placeholder?: string;
  }
  export interface IGroup extends Core.IComponent {
    name: string;
    title?: string;
  }
  export interface IBase extends IFormItem {
    value: any;
  }
  export interface IInput extends IBase {

  }
  export interface ISwitch extends IBase {

  }
  export interface IForm extends Core.IComponent {
    data: HashMap<any>;
    groups?: Array<IGroup>;
    fields: Array<IFormItem>;
    onChange: (name: any, value: any) => void;
    wrap?: boolean;
    buttons?: any[];
  }
}

export namespace Layout {
  export interface IContainer extends Core.IComponent {

  }
}

export namespace Lists {
  export interface IList extends Core.IComponent {
    itemClassName?: string;
  }
  export interface ITabs extends IList {
    onClick?: (e: any) => void;
    activeId?: number;
    itemClassName?: string;
    items: Array<{
      id: number;
      caption: string;
    }>;
  }
  export interface ToolbarButton extends Buttons.IButton {
    anchor?: boolean;
    caption?: string;
  }
  export interface IToolbar extends Core.IComponent {
    itemClassName?: string;
    items: Array<ToolbarButton | React.ReactElement>;
  }
}

export namespace Popups {
  export interface IPopup extends Core.IComponent {
    visible?: boolean;
  }
  export interface IInner extends Core.IComponent {
    title?: string;
    headerContent?: any;
    footerContent?: any;
    onCloseClick?: (e: any) => void;
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
    className?: string;
  }
}

export namespace Misc {
  export interface IBubble extends Core.IComponent {

  }
  export interface IReference extends Core.IComponent {
    id: string | number;
    title: string;
    descr: string;
    href?: string;
    onCloseClick?: (e: any) => void;
  }
  export interface Empty {
    heading: string;
    text: string;
  }
}
