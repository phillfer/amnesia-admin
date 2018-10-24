import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';
import './InputPassword.scss';

import iconPassword from '../../../assets/images/icons/icon-password.svg';
import iconPasswordLight from '../../../assets/images/icons/icon-password-light.svg';
import iconVisibleLight from '../../../assets/images/icons/icon-visible-light.svg';
import iconVisible from '../../../assets/images/icons/icon-visible.svg';
import iconInvisibleLight from '../../../assets/images/icons/icon-invisible-light.svg';
import iconInvisible from '../../../assets/images/icons/icon-invisible.svg';

const validate = value => {
  if (!value) return { error: 'Senha deve ser preenchida' };
  if (value.length < 8)
    return { error: 'Senha deve conter no mínimo 8 caracteres.' };
  return { success: true };
};

export default class InputPassword extends Component {
  static propTypes = {
    light: PropTypes.bool,
  };

  state = {
    visible: false,
  };

  handleVisibilityChange = visibility => {
    this.setState({
      visible: visibility,
    });
  };

  render() {
    const { light } = this.props;
    const { visible } = this.state;

    let iconVisibility = '';
    if (visible) {
      if (light) iconVisibility = iconVisibleLight;
      else iconVisibility = iconVisible;
    } else if (light) iconVisibility = iconInvisibleLight;
    else iconVisibility = iconInvisible;

    return (
      <div styleName="input-password">
        <InputBuilder
          type={visible ? 'text' : 'password'}
          validate={validate}
          clearable={false}
          field="password"
          placeholder="Senha"
          icon={light ? iconPasswordLight : iconPassword}
          {...this.props}
        />
        <img
          styleName="icon-visibility"
          src={iconVisibility}
          alt="ícone visibilidade"
          onClick={() => this.handleVisibilityChange(!visible)}
          onMouseDown={e => e.preventDefault()}
          role="presentation"
        />
      </div>
    );
  }
}
