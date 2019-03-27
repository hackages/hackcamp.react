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

export const cart = () => {
  return null;
};
