import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieCommentForm.css';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {connect} from 'react-redux';

class _MovieCommentForm extends React.Component {
  state = {
    author: '',
    content: ''
  };

  postComment = e => {
    e.preventDefault();
    axios
      .post(
        `${SERVER_URL}/movies/${this.props.movieId}/comments/`,
        {
          author: this.state.author,
          content: this.state.content
        },
        {
          headers: {Authorization: this.props.token}
        }
      )
      .then(this.setState({author: '', content: ''}))
      .then(this.props.updateComments);
  };

  updateContentText = e => {
    this.setState({content: e.target.value});
  };

  updateAuthor = e => {
    this.setState({author: e.target.value});
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
            value={this.state.author}
            onChange={this.updateAuthor}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="content"
            id="content"
            cols="30"
            rows="3"
            value={this.state.content}
            onChange={this.updateContentText}
          />
        </div>

        <button className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

_MovieCommentForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  updateComments: PropTypes.func.isRequired,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export const MovieCommentForm = connect(mapStateToProps)(_MovieCommentForm);
