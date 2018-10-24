import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconLinkedin = require('../../../assets/images/icons/icon-linkedin.svg');
const iconLinkedinLight = require('../../../assets/images/icons/icon-linkedin-light.svg');

export default class InputLinkedin extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconLinkedinLight : iconLinkedin}
        field="linkedin"
        placeholder="Linkedin"
        clearable
        {...this.props}
      />
    );
  }
}
