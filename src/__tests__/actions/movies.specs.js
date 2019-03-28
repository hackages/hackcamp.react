import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {shouldBeAFunction, shouldBeAnActionCreator, shouldTakeXArguments} from "../../__test_utils__/utils";
import {fetchMovies, setMovies} from "../../actions/moviesActions";
import {SERVER_URL} from "../../constants/config";

const mock = new MockAdapter(axios);

describe('The movies actions', () => {
  const movies = [{
    title: 'Super movie',
    id: 45431
  }];
  shouldBeAnActionCreator({
    actionCreator: setMovies,
    type: 'SET_MOVIES',
    params: {
      movies
    },
    expectedPayload: movies
  });

  describe('The fetch movies thunk action', () => {
    test('It should be a function', () => {
      shouldBeAFunction(fetchMovies);
    });

    test('It should return a function', () => {
      shouldBeAFunction(fetchMovies());
    });

    test('The returuned function should take two parameter, dispatch and getState', () => {
      shouldTakeXArguments(fetchMovies(), 2);
    });

    test(`The returned function should use axios to fetch the movies at ${SERVER_URL}/movies`, done => {
      mock.reset();
      mock.onGet(`${SERVER_URL}/movies`).reply(() => {
        done();
        return [
          200,
          movies
        ]
      });
      fetchMovies()(x => x);
    }, 100);

    const mockDispatch = jest.fn();

    mock.reset();
    mock.onGet(`${SERVER_URL}/movies`).reply(() => {
      return [
        200,
        movies
      ]
    });

    test('It should call the dispatch function with an action of type SET_MOVIES', done => {
      expect.assertions(1);
      fetchMovies()(mockDispatch);
      setTimeout(() => {
        const {type} = mockDispatch.mock.calls[0][0];
        expect(type).toEqual('SET_MOVIES');
        done();
      }, 0)
    }, 100);

    test('It should call the dispatch function with an action containining the movies as the payload', done => {
      expect.assertions(1);
      fetchMovies()(mockDispatch);
      setTimeout(() => {
        const {payload} = mockDispatch.mock.calls[1][0];
        expect(payload).toEqual(movies);
        done();
      }, 0)
    }, 100);
  });
});
