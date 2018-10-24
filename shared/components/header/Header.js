import React from 'react';
import Logo from './Logo';
import './Header.scss';

function Header() {
  return (
    <div styleName="header">
      <Logo />
      <h1>Gerenciamento de decks</h1>
    </div>
  );
}

export default Header;
