import React from 'react';
import InputBuilder from '../base/InputBuilder';

const validate = value => {
  if (!value) return { error: 'CEP deve ser preenchido' };
  const length = value.replace(/[^\d]/g, '').length;
  if (length < 8) return { warning: 'CEP deve conter 8 caracteres' };
  return { success: true };
};

const mask = () => [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

const InputZip = props => (
  <InputBuilder
    validate={validate}
    mask={mask}
    clearable
    field="zip"
    placeholder="CEP"
    {...props}
  />
);

export default InputZip;
