import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

import iconPhone from '../../../assets/images/icons/icon-smartphone.svg';
import iconPhoneLight from '../../../assets/images/icons/icon-smartphone-light.svg';

const FIELD = 'phones_attributes';

const validate = (value, formApi, index) => {
  const phones = formApi.values[FIELD];
  const other = 1 - index;

  if (!value && (!phones || !phones[other] || !phones[other].number))
    return { warning: 'Telefone ou celular devem ser preenchidos' };
  return { success: true };
};

const mask = value => {
  const length = value.replace(/[^\d]/g, '').length;

  if (value.indexOf('+') === 0 || length > 11) {
    if (length < 2 || value.slice(1, 3) === '55')
      return [
        '+',
        /[1-9]/,
        /[1-9]/,
        ' ',
        '(',
        /[1-9]/,
        /[1-9]/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ];

    const emptyArray = [...Array(length > 2 ? length - 2 : 8)];
    return ['+', /[1-9]/, /[1-9]/, ' ', ...emptyArray.map(() => /[1-9]/)];
  }
  if (length > 10)
    return [
      '(',
      /[1-9]/,
      /[1-9]/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  return [
    '(',
    /[1-9]/,
    /[1-9]/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};

export default class InputPhone extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    light: PropTypes.bool,
    formApi: PropTypes.shape({}),
    placeholder: PropTypes.string,
  };

  render() {
    const { index, placeholder, formApi, light } = this.props;
    return (
      <InputBuilder
        validate={v => validate(v, formApi, index)}
        mask={mask}
        clearable
        field="phone"
        icon={light ? iconPhoneLight : iconPhone}
        placeholder={placeholder || 'Telefone'}
        {...this.props}
      />
    );
  }
}
