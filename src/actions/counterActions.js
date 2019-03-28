import {UPDATE_COUNTER} from '../constants/actions'

/**
 * @param payload: value of the counter
 */
export const updateCounter = payload => ({
  type: UPDATE_COUNTER,
  payload,
})
