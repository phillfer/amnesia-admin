import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRedirectLocation } from '../../../utils/authHelper';
import { selectUserData } from '../user/User.duck';
import { selectShouldValidate } from '../validate/Validate.duck';
import Loading from './Loading';

class NotAuthRoute extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
    shouldValidate: PropTypes.bool.isRequired,
  };

  render() {
    const { user, shouldValidate, ...rest } = this.props;
    if (shouldValidate) return <Loading />;
    if (user && user.id) return <Redirect to={getRedirectLocation()} />;
    return <Route {...rest} />;
  }
}

const mapStateToProps = state => ({
  shouldValidate: selectShouldValidate(state),
  user: selectUserData(state),
});

export default connect(mapStateToProps)(NotAuthRoute);
