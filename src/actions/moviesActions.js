import {GET_MOVIES} from '../constants/actions';

/**
 * @param payload: auth token
 */
export const getMovies = payload => ({
  type: GET_MOVIES,
  payload
});
