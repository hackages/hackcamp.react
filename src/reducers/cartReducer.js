import {
  UNDO_CART_ACTION,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART
} from '../constants/actions';

export const initialState = {
  previousState: {},
  products: [],
  count: 0,
  isOpen: false
};

const isInCart = (products, id) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

const reducer = {
  [ADD_ITEM_TO_CART]: (state, payload) => {
    const products = isInCart(state.products, payload)
      ? state.products
      : [...state.products, payload];

    const count = products.length;
    return {
      ...state,
      previousState: state,
      count,
      products
    };
  },
  [REMOVE_ITEM_FROM_CART]: (state, payload) => {
    const products = state.products.filter(
      nextElement => nextElement !== payload
    );

    const count = products.length;

    return {
      ...state,
      previousState: state,
      count,
      products
    };
  },
  [UNDO_CART_ACTION]: state => ({
    ...state.previousState
  }),
  [TOGGLE_CART]: state => ({
    ...state,
    isOpen: !state.isOpen
  })
};

export const cart = (state = initialState, action = {}) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
