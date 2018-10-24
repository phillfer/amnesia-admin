import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './InputIcon.scss';

export default class InputIcon extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    forwardedRef: PropTypes.shape({}),
  };

  componentDidMount() {
    const { forwardedRef } = this.props;
    forwardedRef.current.focus();
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
