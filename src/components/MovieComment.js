import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {connect} from 'react-redux';

export class MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired,
    token: PropTypes.string
  };

  deleteComment = e => {
    e.preventDefault();
    axios
      .delete(`${SERVER_URL}/comments/${this.props.data.id}`, {
        headers: {Authorization: this.props.token}
      })
      .then(this.props.updateComments);
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
