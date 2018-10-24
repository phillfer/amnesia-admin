import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Logo />
      <h1>Minato</h1>
      <strong>
        Ferreri
        {"'"}s take on Universally
      </strong>
      <Menu />
    </div>
  );
}

export default Header;
