import {initialState, moviesReducer} from '../../reducers/moviesReducer';
import {SET_MOVIES} from '../../constants/actions';
import {SERVER_URL} from '../../constants/config';
import axios from 'axios';

describe('Movies Reducer', () => {
  test('should be a function', () => {
    expect(typeof moviesReducer).toEqual('function');
  });

  test('should return its initial state', () => {
    expect(moviesReducer(undefined, {type: 'testing'})).toEqual(initialState);
  });

  test('should be able to store all the movies', async () => {
    expect.assertions(1);
    const {data: movies} = await axios.get(`${SERVER_URL}/movies`);
    const action = {
      type: SET_MOVIES,
      payload: movies
    };
    const state = moviesReducer([], action);
    expect(state).toEqual(movies);
  });
});
