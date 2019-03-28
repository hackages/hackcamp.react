import {SELECT_TAB, UPDATE_SEARCH_VALUE} from '../constants/actions';

/**
 * @param payload: search term
 */
export const updateSearch = payload => ({
  type: UPDATE_SEARCH_VALUE,
  payload
});

/**
 * @param payload: a genre you want to filter by
 */
export const selectTab = payload => ({
  type: SELECT_TAB,
  payload
});
