import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignIn.scss';

import Page from '../../common/Page';
import Button from '../../common/Button';
import Form from '../../form/base/Form';
import InputEmail from '../../form/default/InputEmail';
import InputPassword from '../../form/default/InputPassword';

export default class SignIn extends Component {
  static propTypes = {
    postSignIn: PropTypes.func.isRequired,
    signin: PropTypes.shape({
      isFetching: PropTypes.bool,
      errors: PropTypes.array,
      data: PropTypes.object,
    }).isRequired,
  };

  handleSubmit(values) {
    this.props.postSignIn(values);
  }

  render() {
    const { signin } = this.props;

    return (
      <Page>
        <div styleName="signin">
          <Form onSubmit={v => this.handleSubmit(v)}>
            <InputEmail light />
            <InputPassword light />
            <Button
              styleName="submit"
              type="submit"
              disabled={signin.isFetching}
              label={signin.isFetching ? 'Entrando' : 'Entrar'}
              accent
              big
            />
          </Form>
        </div>
      </Page>
    );
  }
}
