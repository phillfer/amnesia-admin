import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconClock = require('../../../assets/images/icons/icon-clock.svg');
const iconClockLight = require('../../../assets/images/icons/icon-clock-light.svg');

export default class InputOperatingHours extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  validate = value => {
    if (!value)
      return { error: 'Horário de funcionamento deve ser preenchido' };
    return { success: true };
  };

  mask = () => [
    /[0-2]/,
    /[0-9]/,
    'h',
    /[0-5]/,
    /[0-9]/,
    ' ',
    'à',
    's',
    ' ',
    /[0-2]/,
    /[0-9]/,
    'h',
    /[0-5]/,
    /[0-9]/,
  ];

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        validate={this.validate}
        mask={this.mask}
        clearable
        field="operatingHours"
        placeholder="Horário de funcionamento"
        icon={light ? iconClockLight : iconClock}
        {...this.props}
      />
    );
  }
}
