import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputIcon.scss';

export default class InputIcon extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.element,
    icon: PropTypes.string,
  };

  render() {
    const { placeholder, children, icon } = this.props;

    return (
      <div styleName="input-icon">
        <img src={icon} alt={`campo ${placeholder}`} />
        <div>{children}</div>
      </div>
    );
  }
}
