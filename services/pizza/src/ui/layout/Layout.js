import React from 'react';
import Header from './Header';
import './Layout.scss';

const Layout = ({content, headerSlot1, headerSlot2, headerSlot3}) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__container">
          <Header slot1={headerSlot1} slot2={headerSlot2} slot3={headerSlot3}/>
        </div>
      </header>
      <main className="layout__content">
        <div className="layout__container">{content ? content : ''}</div>
      </main>
      <footer className="layout__footer"></footer>
    </div>
  )
}

export default Layout;
