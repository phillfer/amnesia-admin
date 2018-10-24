import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputBuilder from '../base/InputBuilder';

const iconEstablishment = require('../../../assets/images/icons/icon-company.svg');
const iconEstablishmentLight = require('../../../assets/images/icons/icon-company-light.svg');

export default class InputEstablishmentName extends PureComponent {
  static propTypes = {
    light: PropTypes.bool,
  };

  render() {
    const { light } = this.props;

    return (
      <InputBuilder
        icon={light ? iconEstablishmentLight : iconEstablishment}
        field="establishmentName"
        placeholder="Nome fantasia do estabelecimento"
        clearable
        {...this.props}
      />
    );
  }
}
