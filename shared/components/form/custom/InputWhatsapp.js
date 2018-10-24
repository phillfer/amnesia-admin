import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputPhone from '../default/InputPhone';

const iconWhatsapp = require('../../../assets/images/icons/icon-whatsapp.svg');
const iconWhatsappLight = require('../../../assets/images/icons/icon-whatsapp-light.svg');

export default class InputWhatsapp extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputPhone
        icon={light ? iconWhatsappLight : iconWhatsapp}
        field="whatsapp"
        placeholder="Whatsapp"
        clearable
        {...this.props}
      />
    );
  }
}
