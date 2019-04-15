import {CLOSE_NAV, OPEN_NAV, TOGGLE_CART} from '../constants/actions';
export const initialState = {
  cartClosed: true,
  navClosed: true
};

const reducer = {
  [TOGGLE_CART]: state => ({
    ...state,
    cartClosed: !state.cartClosed
  }),
  [OPEN_NAV]: state => ({
    ...state,
    navClosed: false
  }),
  [CLOSE_NAV]: state => ({
    ...state,
    navClosed: true
  })
};

export const ui = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state) : state;
};
