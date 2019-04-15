import {counter} from '../../reducers/counterReducer';
import {SET_COUNTER} from '../../constants/actions';

describe('Auth Reducer', () => {
  it('should be a function', () => {
    expect(typeof counter).toEqual('function');
  });

  it('should have an initial value of 0', () => {
    expect(counter(undefined, {type: 'testing'})).toEqual(0);
  });

  it('should set the counter to a certain value', () => {
    const action = {
      type: SET_COUNTER,
      payload: 50
    };
    expect(counter(undefined, action)).toEqual(50);
  });
});
