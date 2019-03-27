import {login, logout} from '../../actions/authActions';
import {shouldBeAFunction, shouldTakeXArguments} from "../../__test_utils__/utils";

describe('Auth Actions', () => {
  describe('The login action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(login);
    });

    test('It should take one parameter, the auth token', () => {
      shouldTakeXArguments(login, 1);
    });

    test("It should return an action of type 'LOGIN'", () => {
      const {type} = login();
      expect(type).toEqual('LOGIN');
    });

    test('It should return an action containing the auth token as the payload', () => {
      const AUTH_TOKEN = '?%*fdsjklqfmdqklsmjjkl';
      const {payload} = login(AUTH_TOKEN);
      expect(payload).toEqual(AUTH_TOKEN);
    });
  });

  describe('The logout action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(logout);
    });

    test('It should not take any argument', () => {
      shouldTakeXArguments(logout, 0);
    });

    test("It should return an action of type 'LOGOUT'", () => {
      const {type} = logout();
      expect(type).toBe('LOGOUT');
    });
  });
});
