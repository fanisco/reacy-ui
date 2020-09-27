import React from 'react';
import './Header.scss';

const Header = ({slot1, slot2, slot3}) => {
  return (
    <div className="header">
        <div className="header__slot1">{slot1 ? slot1 : ''}</div>
        <div className="header__slot2">{slot2 ? slot2 : ''}</div>
        <div className="header__slot3">{slot3 ? slot3 : ''}</div>
    </div>
  )
}

export default Header;
