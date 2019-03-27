import {LOGIN, LOGOUT} from '../constants/actions';

/**
 * @param authToken: token used to authenticate yourself when communicating with the remote server
 */
export const login = () => {};

export const logout = () => ({
  type: LOGOUT
});
