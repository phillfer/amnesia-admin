import * as endpoints from '../../../constants/endpoints';
import { networkReducer } from '../../../utils/networkDuck';

// action types
export const POST_REGISTER = 'POST_REGISTER';

// action creators
export const postRegister = data => ({
  type: POST_REGISTER,
  payload: {
    request: {
      method: 'POST',
      url: endpoints.AUTH,
      data,
    },
  },
});

// reducers
const conferenceReducer = networkReducer(POST_REGISTER, { attr: 'data' });

export default conferenceReducer;
