import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRegister } from './Register.duck';
import Register from './Register';

const mapStateToProps = state => ({ register: state.auth.register });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ postRegister }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
