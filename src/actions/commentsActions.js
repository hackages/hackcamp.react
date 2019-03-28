/**
 * @param payload: auth token
 */
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  SET_COMMENTS_FOR_MOVIE
} from '../constants/actions';

/**
 * movie_id: id of the movie the comment belongs to
 * id: id of the comment
 */
export const deleteComment = () => ({});

/**
 * movie_id: id of the movie the commnents belong to
 * comments: an array of comments
 */
export const setCommentsForMovie = () => ({});

/**
 * movie_id: id of the movie which the comment belongs to
 * id: Id used during the optimistic insert
 * author: Author of the comment
 * content: Content of the comment
 */
export const addCommentStart = () => ({});

/**
 * movie_id: id of the movie which the comment belongs to
 * oldId: id of the comment after the optimistic insert
 * id: Actual ID of the comment (received from the server)
 * author: Author of the comment
 * content: Content of the comment
 */
export const addCommentSuccess = () => ({});
