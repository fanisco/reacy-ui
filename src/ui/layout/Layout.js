import React from 'react';
import Header from './Header';
import './Layout.scss';

const Layout = ({content, basket}) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__container">
          <Header basket={basket}/>
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
