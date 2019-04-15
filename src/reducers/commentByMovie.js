import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  GET_COMMENTS
} from '../constants/actions';
export const initialState = {};

const reducer = {
  [ADD_COMMENT_START]: (state, payload) => {
    if (state[payload.movie_id]) {
      return {
        ...state,
        [payload.movie_id]: [...state[payload.movie_id], payload]
      };
    } else {
      return {
        ...state,
        [payload.movie_id]: [payload]
      };
    }
  },
  [ADD_COMMENT_SUCCESS]: (state, payload) => {
    let commentState = state[payload.movie_id].filter(
      c => c.id !== payload.oldId
    );
    commentState = [...commentState, payload];
    return {...state, [payload.movie_id]: commentState};
  },
  [DELETE_COMMENT]: (state, payload) => {
    if (state[payload.movie_id]) {
      let commentsState = state[payload.movie_id].filter(
        c => c.id !== payload.id
      );
      const newState = {...state};
      newState[payload.movie_id] = commentsState;
      return newState;
    }
    return state;
  },
  [GET_COMMENTS]: (state, payload) => {
    let newState = {...state};
    newState[payload.movie_id] = payload.comments;
    return newState;
  }
};

export const comments = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
