import React from 'react';
import InputBuilder from '../base/InputBuilder';

const iconSearch = require('../../../assets/images/icons/icon-search.svg');

const InputSearch = props => (
  <InputBuilder
    icon={iconSearch}
    field="search"
    placeholder="Busca"
    clearable
    autofocus
    {...props}
  />
);

export default InputSearch;
