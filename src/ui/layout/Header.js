import React from 'react';
import './Header.scss';

const Header = ({basket}) => {
  return (
    <div className="header">
        <div className="header__logo"></div>
        <div className="header__menu"></div>
        <div className="header__basket">{basket ? basket : ''}</div>
    </div>
  )
}

export default Header;
