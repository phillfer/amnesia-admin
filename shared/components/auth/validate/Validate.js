import { connect } from 'react-redux';
import { compose } from 'redux';
import { withJob } from 'react-jobs';
import { getValidateToken, selectShouldValidate } from './Validate.duck';

const Validate = () => null;

const mapStateToProps = state => ({
  shouldValidate: selectShouldValidate(state),
});

const mapActionToProps = { getValidateToken };

const work = props => props.shouldValidate && props.getValidateToken();

const job = {
  work,
  serverMode: 'defer',
};

export default compose(
  connect(
    mapStateToProps,
    mapActionToProps,
  ),
  withJob(job),
)(Validate);
