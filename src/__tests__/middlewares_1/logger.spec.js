import {logger} from '../../middlewares/logger.js';
import {
  shouldBeAFunction,
  shouldTakeXArguments
} from '../../__test_utils__/utils';

const action = {
  type: 'log_me',
  payload: {
    foo: 'bar'
  }
};

const state = {
  users: [],
  posts: []
};

const store = {
  getState: () => state
};

describe('The logging middleware', () => {
  test('It should be a function', () => {
    shouldBeAFunction(logger);
  });

  test('This function should take one parameter, the store', () => {
    shouldTakeXArguments(logger, 1);
  });

  test('It should return a function that takes one parameter called next, which is a function', () => {
    const nextFunc = logger();
    shouldBeAFunction(nextFunc);
    shouldTakeXArguments(nextFunc, 1);
  });

  test('The function returned by logger should return yet another function that expects one parameter called an "action"', () => {
    const actionFunc = logger()();
    shouldBeAFunction(actionFunc);
    shouldTakeXArguments(actionFunc, 1);
  });

  describe('should call the next function with the action', () => {
    const next = jest.fn();
    logger(store)(next)(action);
    expect(next).toBeCalledWith(action);
  });

  describe('should return the result of next(action)', () => {
    const next = jest.fn();
    next.mockReturnValue(store.getState());
    const result = logger(store)(next)(action);
    expect(result).toEqual(state);
  });

  describe('should log the action it receives in the following form (view comment in src/__tests__/logger.spec.js)', () => {
    /**
     * console.group('logger middleware');
     * console.log('action', action);
     * console.log('next state', store.getState());
     * console.groupEnd('logger middleware');
     */
    const consoleSpy = jest.spyOn(global.console, 'log');
    const consoleGroupSpy = jest.spyOn(global.console, 'group');
    const consoleGroupEndSpy = jest.spyOn(global.console, 'groupEnd');
    logger(store)(x => x)(action);
    expect(consoleGroupSpy).toHaveBeenCalledWith('logger middleware');
    expect(consoleSpy).toHaveBeenCalledWith('action', action);
    expect(consoleSpy).toHaveBeenCalledWith('next state', store.getState());
    expect(consoleGroupEndSpy).toHaveBeenCalledWith('logger middleware');
  });
});
