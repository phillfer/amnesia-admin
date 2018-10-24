import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTextMask from 'react-text-mask';
import './InputSimple.scss';

export default class InputMasked extends Component {
  static propTypes = {
    mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    forwardedRef: PropTypes.shape({}),
    onChange: PropTypes.func,
    value: PropTypes.string,
    light: PropTypes.bool,
  };

  render() {
    const { mask, forwardedRef, onChange, value, light } = this.props;
    return (
      <div styleName={classNames('input', { light })}>
        <ReactTextMask
          mask={mask}
          ref={forwardedRef}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}
