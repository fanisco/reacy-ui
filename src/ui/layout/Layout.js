import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <header className="layout__header"></header>
      <main className="layout__content">
        <div className="layout__container">{children}</div>
      </main>
      <footer className="layout__footer"></footer>
    </div>
  )
}

export default Layout;
