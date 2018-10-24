import { combineReducers } from 'redux';
import register from '../register/Register.duck';
import signin from '../signin/SignIn.duck';
import user from '../user/User.duck';
import validate from '../validate/Validate.duck';

export default combineReducers({
  user,
  register,
  validate,
  signin,
});
