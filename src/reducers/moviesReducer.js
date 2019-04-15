import {GET_MOVIES} from '../constants/actions';
export const initialState = [];

const reducer = {
  [GET_MOVIES]: (state, payload) => payload
};

export const moviesReducer = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
