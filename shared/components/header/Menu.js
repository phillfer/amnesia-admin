/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Link from 'react-router-dom/Link';
import * as routes from '../../constants/routes';
import './Menu.scss';

function Menu() {
  return (
    <ul styleName="menu">
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={routes.ADMIN}>Admin</Link>
      </li>
    </ul>
  );
}

export default Menu;
