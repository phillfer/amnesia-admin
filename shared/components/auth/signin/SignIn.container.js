import { connect } from 'react-redux';
import { postSignIn, selectSignIn } from './SignIn.duck';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  signin: selectSignIn(state),
});

const mapActionToProps = { postSignIn };

export default connect(
  mapStateToProps,
  mapActionToProps,
)(SignIn);
