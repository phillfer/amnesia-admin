import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconLocation = require('../../../assets/images/icons/icon-location.svg');
const iconLocationLight = require('../../../assets/images/icons/icon-location-light.svg');

export default class InputAddress extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconLocationLight : iconLocation}
        field="address"
        placeholder="Endereço completo"
        clearable
        textarea
        {...this.props}
      />
    );
  }
}
