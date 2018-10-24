import React from 'react';
import InputBuilder from '../base/InputBuilder';

const validate = value => {
  if (!value) return { error: 'Estado deve ser preenchido' };
  return { success: true };
};

const redefine = value => {
  if (!value) return null;
  const re = /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'˜-]+/g;
  return value.replace(re, '').replace(/^\s+|\s+(?=\s)/g, '');
};

const InputState = props => (
  <InputBuilder
    validate={validate}
    preValidate={redefine}
    clearable
    field="state_name"
    placeholder="Estado"
    {...props}
  />
);

export default InputState;
