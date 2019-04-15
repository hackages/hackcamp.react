import {comments, initialState} from '../../reducers/commentByMovie';
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  GET_COMMENTS
} from '../../constants/actions';

describe('Comments Reducer', () => {
  it('should be a function', () => {
    expect(typeof comments).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(comments(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should be able to add a comment for a movie', done => {
    const actionStart = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };
    const expectedStart = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          id: 123456789
        }
      ]
    };
    const expectedSuccess = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        }
      ]
    };

    const prevState = comments(undefined, actionStart);
    expect(prevState).toEqual(expectedStart);
    expect(comments(prevState, actionSuccess)).toEqual(expectedSuccess);
    done();
  });

  it('should be able to add a comment for a movie when there are other comments for other movies', done => {
    const actionStart1 = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess1 = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };

    const actionStart2 = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 302,
        author: 'Steve',
        content: 'Great movie',
        id: 1234567891
      }
    };

    const actionSuccess2 = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 302,
        author: 'Steve',
        content: 'Great movie',
        oldId: 1234567891,
        id: 2
      }
    };
    const expectedSuccess = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          id: 1,
          oldId: 123456789
        }
      ],
      302: [
        {
          movie_id: 302,
          author: 'Steve',
          content: 'Great movie',
          oldId: 1234567891,
          id: 2
        }
      ]
    };

    let prevState = comments(undefined, actionStart1);
    prevState = comments(prevState, actionSuccess1);
    prevState = comments(prevState, actionStart2);
    prevState = comments(prevState, actionSuccess2);
    expect(prevState).toEqual(expectedSuccess);
    done();
  });

  it('should be able to read all the comments for a movie when there is no comments', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: []
      }
    };

    const expected = {
      285: []
    };

    const prevState = comments(undefined, action);
    expect(prevState).toEqual(expected);
    done();
  });

  it('should be able to read all the comments for a movie', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            oldId: 123456789,
            id: 1
          },
          {
            movie_id: 285,
            author: 'John',
            content: 'Good movie',
            oldId: 12345678,
            id: 2
          }
        ]
      }
    };

    const expected = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        },
        {
          movie_id: 285,
          author: 'John',
          content: 'Good movie',
          oldId: 12345678,
          id: 2
        }
      ]
    };

    const prevState = comments(undefined, action);
    expect(prevState).toEqual(expected);
    done();
  });

  it('should be able to read all the comments for multiple movies', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            oldId: 123456789,

            id: 1
          }
        ]
      }
    };
    const action2 = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 302,
        comments: [
          {
            movie_id: 302,
            author: 'John',
            content: 'Good movie',
            oldId: 12345678,
            id: 2
          }
        ]
      }
    };

    const expected = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        }
      ],
      302: [
        {
          movie_id: 302,
          author: 'John',
          content: 'Good movie',
          oldId: 12345678,
          id: 2
        }
      ]
    };

    const prevState = comments(undefined, action);
    expect(comments(prevState, action2)).toEqual(expected);
    done();
  });
  it('should be able to add a comment for a movie', done => {
    const actionStart = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };

    const actionDelete = {
      type: DELETE_COMMENT,
      payload: {
        id: 1,
        movie_id: 285
      }
    };

    const expected = {
      285: []
    };

    let prevState = comments(undefined, actionStart);
    prevState = comments(prevState, actionSuccess);
    expect(comments(prevState, actionDelete)).toEqual(expected);
    done();
  });
});
