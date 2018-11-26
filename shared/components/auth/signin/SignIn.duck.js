import { post, networkReducer, SUCCESS } from '../../../utils/networkDuck';
import * as endpoints from '../../../constants/endpoints';

export const POST_SIGNIN = 'POST_SIGNIN';

export const postSignIn = data => ({
  type: POST_SIGNIN + SUCCESS,
  payload: { data },
});

export default networkReducer(POST_SIGNIN, { attr: 'data' });

export const selectSignIn = state => state.auth.signin;
