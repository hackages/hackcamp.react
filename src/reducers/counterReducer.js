import {UPDATE_COUNTER} from '../constants/actions'
export const initialState = {
  value: 0,
}

const reducer = {
  [UPDATE_COUNTER]: value => ({
    value,
  }),
}

export const counter = (state = initialState, action) => {
  const handler = reducer[action.type]
  return handler ? handler(action.payload) : state
}
