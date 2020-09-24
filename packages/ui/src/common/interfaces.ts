import {ReactElement} from 'react';

export namespace Core {
  export interface IListItem {
    id: string | number;
    caption: string;
  }
  export interface IStyled {
    blockSize?: string;
    colorStyle?: string;
  }
  export interface IComponent {
    mods?: string[];
    className?: string;
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
    items: Array<Core.IListItem>;
  }
  export interface IToolbarButton /*extends Buttons.IButton*/ {
    [x: string]: any;
    anchor?: boolean;
    caption?: string;
  }
  export interface IToolbar extends Core.IComponent {
    itemClassName?: string;
    items: Array<IToolbarButton | ReactElement>;
  }
}

export namespace Popups {
  export interface IPopupOverlay extends Core.IComponent {
    
  }
  export interface IPopupBody extends Core.IComponent {
    title?: string;
    headerContent?: any;
    footerContent?: any;
  }
  export interface IDropdown extends Core.IComponent {
    itemClassName?: string;
    items: Array<Core.IListItem | ReactElement>;
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
