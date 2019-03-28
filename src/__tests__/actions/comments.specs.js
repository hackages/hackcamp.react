import {deleteComment, addCommentSuccess, addCommentStart, setCommentsForMovie} from "../../actions/commentsActions";
import {shouldBeAnActionCreator} from "../../__test_utils__/utils";

describe('the comments actions', () => {
  shouldBeAnActionCreator({
    actionCreator: deleteComment,
    title: 'deleteComment',
    type: 'DELETE_COMMENT',
    payloadDescription: 'An object containing a movie_id and and the id of the comment',
    params: {
      movie_id: 282,
      id: 423
    }
  });

  shouldBeAnActionCreator({
    actionCreator: setCommentsForMovie,
    type: 'SET_COMMENTS_FOR_MOVIE',
    title: 'setCommentsForMovie',
    payloadDescription: 'An object containing a movie_id and an array of comments',
    params: {
      movie_id: 282,
      comments: [
        {
          id: 8323,
          author: 'Sith lord',
          content: 'Empire did nothing wrong',
        }
      ]
    }
  });

  shouldBeAnActionCreator({
    actionCreator: addCommentStart,
    type: 'ADD_COMMENT_START',
    title: 'addCommentStart',
    payloadDescription: 'An object containing a movie_id, the id of the movie for the optimistic insert, the author and the content',
    params: {
      movie_id: 282,
      id: 8323,
      author: 'Sith lord',
      content: 'Empire did nothing wrong',
    }
  });

  shouldBeAnActionCreator({
    actionCreator: addCommentSuccess,
    type: 'ADD_COMMENT_SUCCESS',
    title: 'addCommentSuccess',
    payloadDescription: 'An object containing a movie_id, the id of the optimistically inserted comment, the id of the comment from the backend, the author and the content',
    params: {
      movie_id: 282,
      oldId: 32,
      id: 8323,
      author: 'Sith lord',
      content: 'Empire did nothing wrong',
    }
  });
});
