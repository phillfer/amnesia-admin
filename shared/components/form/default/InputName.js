import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconAvatar = require('../../../assets/images/icons/icon-avatar.svg');
const iconAvatarLight = require('../../../assets/images/icons/icon-avatar-light.svg');

const validate = value => {
  if (!value) return { error: 'Nome deve ser preenchido' };
  return { success: true };
};

const redefine = value => {
  if (!value) return null;
  const re = /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'˜-]+/g;
  return value.replace(re, '').replace(/^\s+|\s+(?=\s)/g, '');
};

export default class InputName extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconAvatarLight : iconAvatar}
        validate={validate}
        preValidate={redefine}
        clearable
        field="name"
        placeholder="Nome"
        {...this.props}
      />
    );
  }
}
