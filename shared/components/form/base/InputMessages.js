import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputMessages.scss';

export default class InputMessages extends Component {
  static propTypes = {
    children: PropTypes.element,
    fieldApi: PropTypes.shape({
      error: PropTypes.string,
      warning: PropTypes.string,
      touched: PropTypes.bool,
    }),
  };

  render() {
    const { children, fieldApi } = this.props;
    const { error, warning, touched } = fieldApi;

    return (
      <div
        styleName={classNames({
          success: touched && !error && !warning,
          error,
          warning,
        })}
      >
        {children}
        <div styleName="message">{touched && (error || warning)}</div>
      </div>
    );
  }
}
