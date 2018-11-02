import React from 'react';
import Logo from './Logo';
import './Header.scss';

import Menu from './Menu';

function Header() {
  return (
    <div styleName="header">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
