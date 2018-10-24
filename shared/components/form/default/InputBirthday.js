import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconCalendar = require('../../../assets/images/icons/icon-calendar.svg');
const iconCalendarLight = require('../../../assets/images/icons/icon-calendar-light.svg');

const validate = value => {
  if (!value) return { error: 'Data de nascimento deve ser preenchida' };
  return { success: true };
};

const mask = () => [
  /[0-3]/,
  /[0-9]/,
  '/',
  /[0-1]/,
  /[0-9]/,
  '/',
  /[1-2]/,
  /[90]/,
  /[0-9]/,
  /[0-9]/,
];

export default class InputBirthday extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        validate={validate}
        mask={mask}
        clearable
        field="birthday"
        placeholder="Data de nascimento"
        icon={light ? iconCalendarLight : iconCalendar}
        {...this.props}
      />
    );
  }
}
