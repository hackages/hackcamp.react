import {addToCart, removeFromCart, toggleCart, undo} from "../../actions/cartActions";
import {shouldBeAFunction, shouldTakeXArguments} from "../../__test_utils__/utils";

describe('The cart actions', () => {
  describe('The addTocart action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(addToCart);
    });

    test('It should take one parameter, the itemId', () => {
      shouldTakeXArguments(addToCart, 1);
    });

    test('It should return an action of type "ADD_ITEM_TO_CART"', () => {
      const {type} = addToCart();
      expect(type).toEqual('ADD_ITEM_TO_CART');
    });

    test('It should return an action containing the item Id as the payload', () => {
      const {payload} = addToCart(42);
      expect(payload).toEqual(42);
    });
  });

  describe('The removeFromCart action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(removeFromCart);
    });

    test('It should take one parameter, the itemId', () => {
      shouldTakeXArguments(removeFromCart, 1);
    });

    test('It should return an action of type "REMOVE_ITEM_FROM_CART"', () => {
      const {type} = removeFromCart();
      expect(type).toEqual('REMOVE_ITEM_FROM_CART');
    });

    test('It should return an action containing the item Id as the payload', () => {
      const {payload} = removeFromCart(42);
      expect(payload).toEqual(42);
    });
  });

  describe('The toggle cart action', () => {
    test('It should be a function', () => {
      shouldBeAFunction(toggleCart);
    });

    test('It should not take any parameter', () => {
      shouldTakeXArguments(toggleCart, 0);
    });

    test('It should return an action of type "TOGGLE_CART"', () => {
      const {type} = toggleCart();
      expect(type).toBe("TOGGLE_CART");
    });
  });

  describe('The undo action', () => {
    test('It should be a function', () => {
      shouldBeAFunction(undo);
    });

    test('It should not take any parameter', () => {
      shouldTakeXArguments(undo, 0);
    });

    test('It should return an action of type "UNDO_CART_ACTION"', () => {
      const {type} = undo();
      expect(type).toBe("UNDO_CART_ACTION");
    });
  });
});
