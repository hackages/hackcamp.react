import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieCommentForm.css';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {connect} from 'react-redux';
import {
  addCommentStart,
  addCommentSuccess,
  deleteComment
} from '../actions/commentsActions';
import {Field, reduxForm} from 'redux-form';
import {FormField} from './FormField';

const validate = data => {
  const errors = {};

  if (!data.author) {
    errors.author = 'Required';
  } else if (!/^[A-Z]/.test(data.author)) {
    errors.author = 'Must start with a capital letter';
  }

  if (!data.content) {
    errors.content = 'Required';
  } else if (data.content.length > 150) {
    errors.content = 'Content is too long. Max 150 characters';
  }

  return errors;
};

class _MovieCommentForm extends React.Component {
  postComment = data => {
    const id = Math.floor(Math.random() * 1000000);
    this.props.dispatchAddStart({
      movie_id: this.props.movieId,
      ...data,
      id: id
    });
    axios
      .post(`${SERVER_URL}/movies/${this.props.movieId}/comments/`, data, {
        headers: {Authorization: this.props.token}
      })
      .then(res => {
        this.props.dispatchAddSuccess({
          ...res.data,
          oldId: id
        });
      })
      .catch(() => {
        this.props.deleteComment({
          movieId: this.props.movieId,
          id: id
        });
      });
  };

  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.props.handleSubmit(this.postComment)}
      >

        <Field
          component={FormField}
          type="text"
          name="author"
          id="author"
          placeholder="Author"
        />

        <Field
          component={FormField}
          type="textarea"
          name="content"
          id="content"
          placeholder="Message"
          cols="30"
          rows="3"
        />

        <button className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

_MovieCommentForm.propTypes = {
  movieId: PropTypes.string.isRequired,
  updateComments: PropTypes.func.isRequired,
  token: PropTypes.string,
  dispatchAddStart: PropTypes.func.isRequired,
  dispatchAddSuccess: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToState = dispatch => ({
  dispatchAddStart: payload => dispatch(addCommentStart(payload)),
  dispatchAddSuccess: payload => dispatch(addCommentSuccess(payload)),
  deleteComment: payload => dispatch(deleteComment(payload))
});

const ConnectedMovieCommentForm = connect(mapStateToProps, mapDispatchToState)(
  _MovieCommentForm
);

export const MovieCommentForm = reduxForm({form: 'comments', validate})(
  ConnectedMovieCommentForm
);
