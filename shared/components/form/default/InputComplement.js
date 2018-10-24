import React from 'react';
import InputBuilder from '../base/InputBuilder';

const redefine = value => {
  if (!value) return null;
  const re = /[^0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+/g;
  return value.replace(re, '').replace(/^\s+|\s+(?=\s)/g, '');
};

const InputComplement = props => (
  <InputBuilder
    preValidate={redefine}
    clearable
    field="complement"
    placeholder="Complemento"
    {...props}
  />
);

export default InputComplement;
