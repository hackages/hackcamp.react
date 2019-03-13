import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieCommentForm.css';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';

export class MovieCommentForm extends React.Component {
  postComment = e => {
    // This function should POST a comment to SERVER_URL/movies/movieId/comments
    // In order to do so, you need to keep track of the values in the author and content fields in your state.
    // Once you posted a comment, tell the parent to fetch the comments again
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.postComment}>

        <div className="form-group">
          <input
            className="form-control"
            name="author"
            id="author"
            type="text"
            placeholder="Author"
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="content"
            id="content"
            cols="30"
            rows="3"
          />
        </div>

        <button className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}
