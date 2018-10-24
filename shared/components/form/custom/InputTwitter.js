import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconTwitter = require('../../../assets/images/icons/icon-twitter.svg');
const iconTwitterLight = require('../../../assets/images/icons/icon-twitter-light.svg');

export default class InputTwitter extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconTwitterLight : iconTwitter}
        field="twitter"
        placeholder="Twitter"
        clearable
        {...this.props}
      />
    );
  }
}
