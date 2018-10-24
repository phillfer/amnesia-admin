import { getSession, hasSession } from '../../../utils/authHelper';
import { get, networkReducer } from '../../../utils/networkDuck';
import { VALIDATE_TOKEN } from '../../../constants/endpoints';
import { selectUserData } from '../user/User.duck';

export const GET_VALIDATE_TOKEN = 'GET_VALIDATE_TOKEN';

export default networkReducer(GET_VALIDATE_TOKEN, { attr: 'data' });

export const selectValidate = state => state.auth.validate;

export const selectShouldValidate = state => {
  if (selectValidate(state).isFetching) return false; // is validating right now
  if (!hasSession()) return false; // has no session to validate
  if (selectUserData(state)) return false; // already validated
  return true;
};

export const getValidateToken = () =>
  get(GET_VALIDATE_TOKEN, VALIDATE_TOKEN, getSession());
