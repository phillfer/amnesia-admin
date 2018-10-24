import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputClearable.scss';

import iconClear from '../../../assets/images/icons/icon-clear.svg';
import iconClearLight from '../../../assets/images/icons/icon-clear-light.svg';

export default class InputClearable extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.element,
    light: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    forwardedRef: PropTypes.shape({}),
    fieldApi: PropTypes.shape({
      setValue: PropTypes.func,
    }),
  };

  handleClear() {
    const { fieldApi, forwardedRef } = this.props;
    fieldApi.setValue('');
    forwardedRef.current.focus();
  }

  render() {
    const { placeholder, children, light, value } = this.props;

    return (
      <div>
        <div>{children}</div>
        {value && (
          <div
            styleName="clear-button"
            onClick={() => this.handleClear()}
            role="presentation"
          >
            <img
              src={light ? iconClearLight : iconClear}
              alt={`limpar campo ${placeholder}`}
            />
          </div>
        )}
      </div>
    );
  }
}
