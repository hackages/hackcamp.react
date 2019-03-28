import {LOGIN, LOGOUT} from '../constants/actions'
export const initialState = {
  loggedIn: false,
  token: null,
}

const reducer = {
  [LOGIN]: token => ({
    loggedIn: true,
    token,
  }),
  [LOGOUT]: () => initialState,
}

export const auth = (state = initialState, action) => {
  const handler = reducer[action.type]
  return handler ? handler(action.payload) : state
}
