import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Page.scss';

export default class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
  };

  render() {
    const { children } = this.props;
    return <div styleName="page">{children}</div>;
  }
}
