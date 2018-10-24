const API_ROOT = '';

export const POSTS = `${API_ROOT}/posts`;
export const POST = id => `${POSTS}/${id}`;

export const AUTH = `${API_ROOT}/auth`;
export const SIGN_IN = `${AUTH}/sign_in`;
export const SIGN_OUT = `${AUTH}/sign_out`;
export const VALIDATE_TOKEN = `${AUTH}/validate_token`;
