import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

import iconEmail from '../../../assets/images/icons/icon-email.svg';
import iconEmailLight from '../../../assets/images/icons/icon-email-light.svg';

const redefine = value => {
  if (!value) return null;
  const re = /[^a-z0-9.+_@-]+/g;
  return value.toLowerCase().replace(re, '');
};

const validate = value => {
  if (!value) return { error: 'Email deve ser preenchido' };
  const regex = /^[a-z0-9.+_-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(value)) return { warning: 'E-mail inválido' };
  return { success: true };
};

export default class InputEmail extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        validate={validate}
        preValidate={redefine}
        field="email"
        placeholder="E-mail"
        icon={light ? iconEmailLight : iconEmail}
        clearable
        {...this.props}
      />
    );
  }
}
