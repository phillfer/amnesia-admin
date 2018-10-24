import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

export default class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    raised: PropTypes.bool,
    light: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  /* eslint-disable react/button-has-type */
  render() {
    const { onClick, raised, light, disabled, label, type } = this.props;
    return (
      <button
        type={type || 'button'}
        styleName={classNames('button', { raised, light })}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
}
