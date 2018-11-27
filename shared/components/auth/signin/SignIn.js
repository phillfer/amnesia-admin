import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import './SignIn.scss';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Logo from '../../header/Logo';

import Page from '../../common/Page';

export class SignIn extends Component {
  static propTypes = {
    postSignIn: PropTypes.func.isRequired,
    signin: PropTypes.shape({
      isFetching: PropTypes.bool,
      errors: PropTypes.array,
      data: PropTypes.object,
    }).isRequired,
  };

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/admin',

    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: result => {
        console.log('LOGOUU', result);
        this.props.postSignIn(result.user);
        this.props.history.replace('admin');
      },
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  handleSubmit(values) {
    this.props.postSignIn(values);
  }

  render() {
    const { signin } = this.props;

    return (
      <Page>
        <div styleName="signin">
          <div styleName="logo">
            <Logo />
            <h1>Área Administrativa</h1>
          </div>
          <StyledFirebaseAuth
            uiCallback={ui => ui.disableAutoSignIn()}
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Page>
    );
  }
}

export default withRouter(SignIn);
