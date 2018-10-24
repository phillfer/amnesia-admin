import { post, networkReducer } from '../../../utils/networkDuck';
import * as endpoints from '../../../constants/endpoints';

export const POST_SIGNIN = 'POST_SIGNIN';

export const postSignIn = data => post(POST_SIGNIN, endpoints.SIGN_IN, data);

export default networkReducer(POST_SIGNIN, { attr: 'data' });

export const selectSignIn = state => state.auth.signin;
