/**
 * @param payload: id of the item you wish to add to your cart
 */
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART,
  UNDO_CART_ACTION
} from '../constants/actions';

export const addToCart = payload => ({
  type: ADD_ITEM_TO_CART,
  payload
});

/**
 * @param payload: id of the item you wish to remove from your cart
 */
export const removeFromCart = payload => ({
  type: REMOVE_ITEM_FROM_CART,
  payload
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const undo = () => ({
  type: UNDO_CART_ACTION
});
