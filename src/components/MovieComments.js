import React from 'react';
import PropTypes from 'prop-types';
import {MovieCommentForm} from './MovieCommentForm';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {MovieComment} from './MovieComment';
import '../css/MovieComments.css';

export class MovieComments extends React.Component {
  state = {
    comments: []
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired
  };

  fetchComments = () => {
    // This function should fetch the comments from SERVER_URL/movies/movieId/comments
    // then store them in this.state.comments
  };

  render() {
    return (
      <div className="comments-block">
        <h2>Comments</h2>

        <MovieCommentForm />

        <div className="movie-comments">
          {this.state.comments.map(comment => (
            <MovieComment
              key={comment.id}
              data={comment}
            />
          ))}
        </div>
      </div>
    );
  }
}
