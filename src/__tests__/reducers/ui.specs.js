import {ui, initialState} from '../../reducers/uiReducer';
import {OPEN_NAV, CLOSE_NAV, TOGGLE_CART} from '../../constants/actions';

const actionOpen = {
  type: OPEN_NAV
};

const actionClose = {
  type: CLOSE_NAV
};

const actionToggleCart = {
  type: TOGGLE_CART
};

describe('Auth Reducer', () => {
  it('should be a function', () => {
    expect(typeof ui).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(ui(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should be able to open the navbar', () => {
    expect(ui(undefined, actionOpen).navClosed).toEqual(false);
    expect(ui({navClosed: false}, actionOpen).navClosed).toEqual(false);
    expect(ui({navClosed: true}, actionOpen).navClosed).toEqual(false);
  });

  it('should be able to close the navbar', () => {
    expect(ui(undefined, actionClose).navClosed).toEqual(true);
    expect(ui({navClosed: false}, actionClose).navClosed).toEqual(true);
    expect(ui({navClosed: true}, actionClose).navClosed).toEqual(true);
  });

  it('should be able to toggle the cart', () => {
    expect(ui({cartClosed: false}, actionToggleCart).cartClosed).toEqual(true);
    expect(ui({cartClosed: true}, actionToggleCart).cartClosed).toEqual(false);
  });
});
