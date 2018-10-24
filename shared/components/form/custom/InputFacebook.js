import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconFacebook = require('../../../assets/images/icons/icon-facebook.svg');
const iconFacebookLight = require('../../../assets/images/icons/icon-facebook-light.svg');

export default class InputFacebook extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconFacebookLight : iconFacebook}
        field="facebook"
        placeholder="Facebook"
        clearable
        {...this.props}
      />
    );
  }
}
