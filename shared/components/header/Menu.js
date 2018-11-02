/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import * as routes from '../../constants/routes';
import './Menu.scss';

const iconMenu = require('../../assets/images/icons/icon-menu.svg');

class Menu extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  state = {
    open: false,
  };

  openMenu = () => {
    this.setState({ open: true });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const { location } = this.props;
    const { open } = this.state;

    return (
      <div styleName={classNames('menu', { open })}>
        <img
          src={iconMenu}
          alt="ícone menu"
          styleName="menu-button"
          onClick={() => this.openMenu()}
          role="presentation"
        />
        <div
          styleName="background"
          onClick={() => this.closeMenu()}
          role="presentation"
        />
        <div styleName="content">
          <div
            styleName={classNames({
              active:
                location.pathname === routes.DECKS ||
                location.pathname.includes(routes.DECKS.routeBase),
            })}
          >
            <Link to={routes.DECKS} onClick={() => this.closeMenu()}>
              Gerenciamento de decks
            </Link>
          </div>
          <div
            styleName={classNames({
              active:
                location.pathname === routes.RANKING ||
                location.pathname.includes(routes.RANKING.routeBase),
            })}
          >
            <Link to={routes.RANKING} onClick={() => this.closeMenu()}>
              Ranking geral
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
