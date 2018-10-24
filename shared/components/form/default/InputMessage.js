import React from 'react';
import InputBuilder from '../base/InputBuilder';

const iconList = require('../../../assets/images/icons/icon-list.svg');

const InputMessage = props => (
  <InputBuilder
    icon={iconList}
    field="message"
    placeholder="Mensagem"
    textarea
    clearable
    {...props}
  />
);

export default InputMessage;
