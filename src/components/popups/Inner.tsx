import React from 'react';
import {Popups} from '../../common/interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import {Toolbar} from '../lists';
import {Button} from '../buttons';
import {Icon} from '../misc';

export const Inner: React.FC<Popups.IInner> = ({children, ...props}) => {
  const mods = defaultSize(props.mods);
  const classBase = 'rcy-popupInner';
  const className = bemClasses(classBase, mods, props.className);
  return (
    <div className={className}>
      <header className={`${classBase}__header`}>
        <span className={`${classBase}__title`}>{props.title}</span>
        <Button className={`${classBase}__close`} onClick={props.onCloseClick} mods={['inline']}>
          <Icon name="times"/>
        </Button>
      </header>
      <section className={`${classBase}__body`}>{children}</section>
      <footer className={`${classBase}__footer`}>
        <Toolbar items={[{caption: 'OK'}, {caption: 'Close'}]}/>
      </footer>
    </div>
  );
};
