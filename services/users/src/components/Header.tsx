import React from 'react';
import {Misc} from 'reacy-ui';
import {RouteButton} from './RouteButton';
import './Header.scss'

export const Header: React.FC<{title: string;}> = ({title, ...props}) => {
  return (
    <header id="#header" className="header">
      <div className="header__back">
        <RouteButton href="__back" mods={['inline']}>
          <Misc.Icon name="arrow-left" size="2x"/>
        </RouteButton>
      </div>
      <h1 className="header__title">{title}</h1>
    </header>
  );
};
