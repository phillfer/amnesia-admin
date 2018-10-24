import React from 'react';
import InputBuilder from '../base/InputBuilder';

const validate = value => {
  if (!value) return { error: 'Cidade deve ser preenchida' };
  return { success: true };
};

const redefine = value => {
  if (!value) return null;
  const re = /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'˜-]+/g;
  return value.replace(re, '').replace(/^\s+|\s+(?=\s)/g, '');
};

const InputCity = props => (
  <InputBuilder
    validate={validate}
    preValidate={redefine}
    clearable
    field="city_name"
    placeholder="Cidade"
    {...props}
  />
);

export default InputCity;
