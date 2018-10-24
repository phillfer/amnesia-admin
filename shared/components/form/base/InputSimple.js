import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputSimple.scss';

export default class InputSimple extends Component {
  static propTypes = {
    forwardedRef: PropTypes.shape({}),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    light: PropTypes.bool,
    type: PropTypes.string,
  };

  render() {
    const { forwardedRef, onChange, onFocus, value, light, type } = this.props;

    return (
      <div styleName={classNames('input', { light })}>
        <input
          ref={forwardedRef}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
      </div>
    );
  }
}
