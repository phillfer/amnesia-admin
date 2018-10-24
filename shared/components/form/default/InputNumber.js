import React from 'react';
import InputBuilder from '../base/InputBuilder';

const redefine = value => {
  if (!value) return null;
  const re = /[^A-Z0-9\s]+/g;
  return value
    .toUpperCase()
    .replace(re, '')
    .replace(/^\s+|\s+(?=\s)/g, '');
};

const InputNumber = props => (
  <InputBuilder
    preValidate={redefine}
    clearable
    field="number"
    placeholder="Número"
    {...props}
  />
);

export default InputNumber;
