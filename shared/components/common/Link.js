import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LinkOpt extends PureComponent {
  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.string,
    ]),
  };

  render() {
    const { to, children } = this.props;
    if (to)
      return (
        <Link to={to} {...this.props}>
          {children}
        </Link>
      );
    return <div {...this.props}>{children}</div>;
  }
}
