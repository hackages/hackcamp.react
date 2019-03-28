import {thunk} from '../../middlewares/thunk';
import {
  shouldBeAFunction,
  shouldTakeXArguments
} from '../../__test_utils__/utils';

describe('The thunk middleware', () => {
  const store = {
    getState: () => ({
      foo: 'bar'
    }),
    dispatch: () => ({})
  };

  const dummyAction = {type: 'DUMMY_ACTION'};

  const nextSpy = jest.fn();

  describe('It should look like a middleware', () => {
    let thunkWithStore;
    let thunkWithNext;
    test('It should be a function that takes a store as a parameter and returns a function', () => {
      shouldBeAFunction(thunk);
      shouldTakeXArguments(thunk, 1);
    });
    test('The returned function should take next as an argument and return a function', () => {
      thunkWithStore = thunk(store);
      shouldBeAFunction(thunkWithStore);
      shouldTakeXArguments(thunkWithStore, 1);
    });
    test('The returned function should take an action', () => {
      thunkWithNext = thunkWithStore(x => x);
      shouldBeAFunction(thunkWithNext);
      shouldTakeXArguments(thunkWithNext, 1);
    });
  });

  describe('handling the action', () => {
    describe('when its a plain object', () => {
      test('Call the next function with the action', () => {
        nextSpy.mockReset();
        thunk(store)(nextSpy)(dummyAction);
        expect(nextSpy).toBeCalledWith(dummyAction);
      });
      test('Should return the result of next(action)', () => {
        nextSpy.mockReset();
        nextSpy.mockReturnValue(store.getState());
        const result = thunk(store)(nextSpy)(dummyAction);
        expect(result).toEqual(store.getState());
      });
    });
    describe('when its a function', () => {
      const functionAction = (dispatch, getState) => {
        getState();
        return dispatch(dummyAction);
      };

      test('It should not call next', () => {
        nextSpy.mockReset();
        thunk(store)(nextSpy)(functionAction);
        expect(nextSpy).not.toBeCalled();
      });

      test('It should call the action with dispatch and getState (from the store object)', () => {
        const dispatchSpy = jest.fn();
        const getStateSpy = jest.fn();
        thunk({dispatch: dispatchSpy, getState: getStateSpy})(nextSpy)(
          functionAction
        );
        expect(getStateSpy).toHaveBeenCalled();
        expect(dispatchSpy).toHaveBeenCalledWith(dummyAction);
      });

      test('It should return the result of the action function', () => {
        const dispatch = jest.fn();
        const getState = jest.fn();
        dispatch.mockReturnValue(store.getState());
        const result = thunk({dispatch, getState})(x => x)(functionAction);
        expect(result).toEqual(store.getState());
      });
    });
  });
});
