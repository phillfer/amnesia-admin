import { create } from 'apisauce';
import config from '../../config';
import { onRequest, onResponse } from './authHelper';

const api = create({
  baseURL: config('apiAddress'),
});

api.addRequestTransform(request => {
  onRequest(request);
});

api.addResponseTransform(response => {
  onResponse(response);
});

export default api;
