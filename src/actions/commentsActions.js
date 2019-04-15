/**
 * @param payload: auth token
 */
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  GET_COMMENTS
} from '../constants/actions';

export const deleteComment = payload => ({
  type: DELETE_COMMENT,
  payload
});

export const getComments = payload => ({
  type: GET_COMMENTS,
  payload
});

export const addCommentStart = payload => ({
  type: ADD_COMMENT_START,
  payload
});

export const addCommentSuccess = payload => ({
  type: ADD_COMMENT_SUCCESS,
  payload
});
