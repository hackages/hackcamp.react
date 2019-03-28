import {freezeState} from '../../middlewares/freezeState';
import {
  shouldBeAFunction,
  shouldTakeXArguments
} from '../../__test_utils__/utils';

class store {
  state = {};

  getState = () => this.state;

  dispatch = action => {};
}

const mockStore = new store();

describe('The freeze middleware', () => {
  describe('It should look like a middleware', () => {
    let freezeStateWithStore;
    let freezeStateWithNext;
    test('It should be a function that takes a store as a parameter and returns a function', () => {
      shouldBeAFunction(freezeState);
      shouldTakeXArguments(freezeState, 1);
    });
    test('The returned function should take next as an argument and return a function', () => {
      freezeStateWithStore = freezeState(mockStore);
      shouldBeAFunction(freezeStateWithStore);
      shouldTakeXArguments(freezeStateWithStore, 1);
    });
    test('The returned function should take an action', () => {
      freezeStateWithNext = freezeStateWithStore(x => x);
      shouldBeAFunction(freezeStateWithNext);
      shouldTakeXArguments(freezeStateWithNext, 1);
    });
  });

  describe('Handling actions', () => {
    test('It should call the next function with the action', () => {
      const mockNext = jest.fn();
      freezeState(mockStore)(mockNext)({type: 'DUMMY_ACTION'});
      expect(mockNext).toBeCalledWith({type: 'DUMMY_ACTION'});
    });
  });

  describe('State mutations', () => {
    test('It should throw when mutation occurs during action dispatching', () => {
      const state = {};
      const getState = () => state;
      const next = () => {
        const state = getState();
        state.prop = 42;
      };
      const freezeWithNext = freezeState({getState})(next);
      expect(freezeWithNext).toThrow();
    });

    test('It should throw when mutation occurs outside of action dispatching', () => {
      const state = {};
      const getState = () => state;
      const next = () => {};
      freezeState({getState})(next)();
      expect(() => {
        const state = getState();
        state.prop = 42;
      }).toThrow();
    });

    test('It should not attempt to freeze non-object values (see comments)', () => {
      // Object values: Objects, arrays
      // Non Object values: Strings, Numbers, undefined, null
      const nonObjects = [0, '', undefined, null];

      nonObjects.forEach(state => {
        const getState = () => state;
        expect(freezeState({getState})(x => x)).not.toThrow();
      });
    });
  });
});
