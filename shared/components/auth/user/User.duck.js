import { POST_SIGNIN } from '../signin/SignIn.duck';
import { GET_VALIDATE_TOKEN } from '../validate/Validate.duck';
import { REQUEST, SUCCESS } from '../../../utils/networkDuck';
import { getSession } from '../../../utils/authHelper';

const initialState = {
  isFetching: !!getSession(),
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN + REQUEST:
    case GET_VALIDATE_TOKEN + REQUEST:
      return { isFetching: true, data: null };
    case POST_SIGNIN + SUCCESS:
    case GET_VALIDATE_TOKEN + SUCCESS:
      return {
        data: action.payload.data,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const selectUser = state => state.auth.user;
export const selectUserData = state => selectUser(state).data;
