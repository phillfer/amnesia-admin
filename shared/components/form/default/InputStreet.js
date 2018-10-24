import React from 'react';
import InputBuilder from '../base/InputBuilder';

const redefine = value => {
  if (!value) return null;
  const re = /[^0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+/g;
  return value.replace(re, '').replace(/^\s+|\s+(?=\s)/g, '');
};

const InputStreet = props => (
  <InputBuilder
    preValidate={redefine}
    field="street"
    clearable
    placeholder="Rua"
    {...props}
  />
);

export default InputStreet;
