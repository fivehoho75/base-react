import React from 'react';
import './header.scss';
import Responsive from 'components/base/responsive';

const Header = () => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        Memo
      </div>
      <nav>
        <a className="active" href="/">
          메뉴1
        </a>
        <a href="/">
          메뉴2
        </a>
        <a href="/">
          메뉴3
        </a>
      </nav>
      <div className="right">
        right side
      </div>
    </Responsive>
  </header>
);

export default Header;