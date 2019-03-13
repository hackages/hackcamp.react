import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';

export class MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  deleteComment = event => {
    // First, stop the default event you receive in parameter
    // Wirte a function to delete the comments
    // To do so, send a DELETE HTTP request to SERVERL_URL/comments/commentId
    // Once you did that, refresh the list of comments
  };

  render() {
    return (
      <div className="movie-comment">
        <span onClick={this.deleteComment}>Delete</span>
        <p className="name">{this.props.data.author}</p>
        <p className="comment">{this.props.data.content}</p>
      </div>
    );
  }
}
