import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SIGN_IN } from '../../../constants/routes';

import Page from '../../common/Page';
import Form from '../../form/base/Form';
import InputName from '../../form/default/InputName';
import InputEmail from '../../form/default/InputEmail';
import InputPassword from '../../form/default/InputPassword';
import Button from '../../common/Button';
import './Register.scss';

export default class Register extends Component {
  static propTypes = {
    postRegister: PropTypes.func.isRequired,
    register: PropTypes.shape({
      isFetching: PropTypes.bool,
      errors: PropTypes.array,
      data: PropTypes.object,
    }).isRequired,
  };

  handleSubmit(values) {
    this.props.postRegister(values);
  }

  render() {
    const { register } = this.props;

    if (register.data && register.data.status === 'success')
      return (
        <div>
          <div>Cadastrado com sucesso</div>
          <Link to={SIGN_IN}>Fazer Login</Link>
        </div>
      );

    return (
      <Page>
        <Form onSubmit={v => this.handleSubmit(v)}>
          <InputEmail />
          <InputName />
          <InputPassword />
          <Button
            type="submit"
            disabled={register.isFetching}
            label={register.isFetching ? 'Cadastrando' : 'Cadastrar'}
          />
        </Form>
      </Page>
    );
  }
}
