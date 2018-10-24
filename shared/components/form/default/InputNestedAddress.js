import React, { Component } from 'react';
import { NestedField } from 'react-form';
import PropTypes from 'prop-types';
import './InputNestedAddress.scss';
import { getAddress } from '../../../utils/getAddress';

import InputStreet from './InputStreet';
import InputNumber from './InputNumber';
import InputComplement from './InputComplement';
import InputZip from './InputZip';
import InputCity from './InputCity';
import InputState from './InputState';

const FIELD = 'address_attributes';

export default class InputNestedAddress extends Component {
  static propTypes = {
    formApi: PropTypes.shape({ values: PropTypes.object }),
  };

  componentWillReceiveProps({ formApi }) {
    this.updateAddress(formApi);
  }

  async updateAddress(formApi) {
    if (!formApi.values || !formApi.successes) return;
    const successes = formApi.successes[FIELD];
    if (!successes || !successes.zip) return;
    const touched = formApi.touched[FIELD];
    const values = formApi.values[FIELD];
    if (
      this.props.formApi.values[FIELD] &&
      this.props.formApi.values[FIELD].zip === values.zip
    )
      return;

    const address = await getAddress(values.zip);
    if (!address || address.erro) return;

    const maps = [
      { from: 'logradouro', to: 'street' },
      { from: 'localidade', to: 'city_name' },
      { from: 'uf', to: 'state_name' },
    ];

    const result = { ...values };

    maps.map(
      m =>
        address[m.from] &&
        (!touched[m.to] || !values[m.to]) &&
        (result[m.to] = address[m.from]),
    );
    formApi.setAllValues({ ...formApi.values, [FIELD]: result });
    formApi.validate();
  }

  render() {
    return (
      <NestedField field={FIELD}>
        <InputZip styleName="third" />
        <InputStreet styleName="third" />
        <InputNumber styleName="third" />
        <InputComplement styleName="third" />
        <InputCity styleName="third" />
        <InputState styleName="third" />
      </NestedField>
    );
  }
}
