import React from 'react';

import {IPopupProps} from '.';
import {Popups} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Button} from '../buttons';
import {Icon} from '../misc';

export const PopupBody: React.FC<Popups.IPopupBody & IPopupProps> = ({onClose, children, ...props}) => {
  const mods = defaultSize(props.mods);
  const classBase = 'rcy-popupBody';
  const className = bemClasses(classBase, mods, props.className);
  let headerContent = null;
  if (props.headerContent) {
    headerContent = props.headerContent;
  } else if (props.title) {
    headerContent = <span className={`${classBase}__title`}>{props.title}</span>;
  }
  return (
    <div className={className}>
      <header className={`${classBase}__header`}>
        {headerContent}
        <Button className={`${classBase}__close`} onClick={onClose} mods={['inline']}>
          <Icon name="times"/>
        </Button>
      </header>
      <section className={`${classBase}__body`}>{children}</section>
      <footer className={`${classBase}__footer`}>{props.footerContent}</footer>
    </div>
  );
};
