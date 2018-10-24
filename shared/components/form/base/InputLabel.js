import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputLabel.scss';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
export default class InputLabel extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.element,
    light: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  render() {
    const { placeholder, children, value, light } = this.props;

    return (
      <div
        styleName={classNames('input-label', {
          value,
          light,
        })}
      >
        {children}
        <label>{placeholder}</label>
      </div>
    );
  }
}
