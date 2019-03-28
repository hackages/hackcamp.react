import {SELECT_PAGE} from '../constants/actions';

/**
 * @param payload: Page you want to navigate to
 */
export const selectPage = payload => ({
  type: SELECT_PAGE,
  payload
});
