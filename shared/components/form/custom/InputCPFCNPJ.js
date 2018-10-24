import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconId = require('../../../assets/images/icons/icon-document.svg');
const iconIdLight = require('../../../assets/images/icons/icon-document-light.svg');

export default class InputCPFCNPJ extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  validate = value => {
    if (!value) return { error: 'CPF/CNPJ deve ser preenchido' };
    return { success: true };
  };

  mask = value => {
    const length = value.replace(/[^\d]/g, '').length;
    if (length > 11) {
      // CNPJ
      return [
        /[0-9]/,
        /[0-9]/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ];
    }

    // CPF
    return [
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ];
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        validate={this.validate}
        mask={this.mask}
        clearable
        field="cpfOrCnpj"
        placeholder="CPF ou CNPJ"
        icon={light ? iconIdLight : iconId}
        {...this.props}
      />
    );
  }
}
