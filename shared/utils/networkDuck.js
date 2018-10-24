import api from './apiMiddleware';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

export const REQUEST = '_REQUEST';
export const FAILURE = '_FAILURE';
export const SUCCESS = '_SUCCESS';

const request = action => ({
  type: action + REQUEST,
});

const success = (action, response) => ({
  type: action + SUCCESS,
  payload: response.data,
});

const failure = (action, response) => ({
  type: action + FAILURE,
  payload: response.data,
});

const networkAction = (action, address, data, method) => async dispatch => {
  dispatch(request(action));
  const response = await api[method](address, data);
  if (response.ok) dispatch(success(action, response));
  else dispatch(failure(action, response));
  return true; // return true if everything is fine to avoid saving tons of info on react jobs
};

export const get = (action, address, data) =>
  networkAction(action, address, data, GET);
export const post = (action, address, data) =>
  networkAction(action, address, data, POST);
export const put = (action, address, data) =>
  networkAction(action, address, data, PUT);
export const delet = (action, address, data) =>
  networkAction(action, address, data, DELETE);

export const basicInitialState = {
  isFetching: false,
  data: null,
  errors: null,
};

export const networkReducer = (type, { initial, attr } = {}) => (
  state = initial ? { ...basicInitialState, ...initial } : basicInitialState,
  action,
) => {
  switch (action.type) {
    case type + REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type + SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: attr ? action.payload[attr] : action.payload,
        errors: null,
      };
    case type + FAILURE:
      return {
        ...state,
        isFetching: false,
        data: null,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default networkReducer;
