import {initialState, cart} from '../../reducers/cartReducer.js';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART,
  UNDO_CART_ACTION
} from '../../constants/actions';

describe('Cart Reducer', () => {
  it('should be a function', () => {
    expect(typeof cart).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(cart(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should be able to add an item', () => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const expected = [action.payload];

    [cart(undefined, action)].map(nextState => {
      expect(nextState.products).toEqual(expected);
    });
  });

  it('should not add the same item multiple times', () => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const expected = [action.payload];

    [cart(undefined, action)]
      .map(nextState => cart(nextState, action))
      .map(nextState => expect(nextState.products).toEqual(expected));
  });

  it('should be able to remove an item', () => {
    const action = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 9382
    };

    const state = {
      products: [9382]
    };

    [cart(state, action)].map(nextState => {
      expect(nextState.products).toEqual([]);
    });
  });

  it('should count the number of items', () => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const action2 = {
      type: ADD_ITEM_TO_CART,
      payload: 4343
    };

    const expected = 1;
    const expected2 = 2;

    [cart(undefined, action)]
      .map(nextState => {
        expect(nextState.count).toEqual(expected);
        return cart(nextState, action2);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(expected2);
        return cart(nextState, action2);
      })
      .map(nextState => expect(nextState.count).toEqual(expected2));
  });

  it('should be able to toggle the open property of the cart', () => {
    const action = {
      type: TOGGLE_CART
    };

    [cart(undefined, action)]
      .map(nextState => {
        expect(nextState.isOpen).toEqual(true);
        return cart(nextState, action);
      })
      .map(nextState => expect(nextState.isOpen).toEqual(false));
  });

  it('should be able to go back in time', () => {
    const action = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 9382
    };

    const undoAction = {
      type: UNDO_CART_ACTION
    };

    const state = {
      products: [9382]
    };

    [cart(state, action)]
      .map(nextState => cart(nextState, undoAction))
      .map(nextState => expect(nextState.products).toEqual(state.products));
  });

  it('should be able to go back in time while still counting the items in the cart', () => {
    const action = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 9382
    };

    const undoAction = {
      type: UNDO_CART_ACTION
    };

    const state = {
      products: [9382],
      count: 1,
      previousState: {
        products: [],
        count: 0
      }
    };

    [cart(state, action)]
      .map(nextState => {
        expect(nextState.products).toEqual([]);
        return cart(nextState, undoAction);
      })
      .map(nextState => {
        expect(nextState).toEqual(state);
        return cart(nextState, action);
      })
      .map(nextState => cart(nextState, undoAction))
      .map(nextState => cart(nextState, action))
      .map(nextState => {
        expect(nextState.count).toEqual(0);
      });
  });
});
