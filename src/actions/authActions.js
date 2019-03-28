import {LOGIN, LOGOUT} from '../constants/actions';

/**
 * @param payload: auth token
 */
export const login = payload => ({
  type: LOGIN,
  payload
});

export const logout = () => ({
  type: LOGOUT
});
