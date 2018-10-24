import store from 'store';
import { HOME } from '../constants/routes';

const LOCAL_STORAGE_KEY = 'session';
const REDIRECT_TO_KEY = 'redirectTo';

export const getSession = () => store.get(LOCAL_STORAGE_KEY);

export const hasSession = () => {
  const session = getSession();
  return !!(session && session.uid);
};

export const saveSession = headers => {
  if (!headers) return null;
  const keys = ['access-token', 'token-type', 'client', 'expiry', 'uid'];
  const result = getSession() || {};
  keys.map(key => headers[key] && (result[key] = headers[key]));
  return store.set(LOCAL_STORAGE_KEY, result);
};

export const clearSession = () => store.clearAll();

export const onRequest = request => {
  const session = getSession();
  request.headers = { ...request.headers, ...session };
};

export const onResponse = response => {
  if (response.status === 401) clearSession();
  else saveSession(response.headers);
};

export const isAdmin = () => !!getSession();

export const setRedirectLocation = route => store.set(REDIRECT_TO_KEY, route);

export const getRedirectLocation = () => store.get(REDIRECT_TO_KEY) || HOME;
