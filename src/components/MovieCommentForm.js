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
      .catch(this.props.updateComments);
  };

  updateForm = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
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
            onChange={this.updateForm}
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
            onChange={this.updateForm}
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
  token: PropTypes.string,
  dispatchAddStart: PropTypes.func.isRequired,
  dispatchAddSuccess: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  updateComments: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToState = ({
  // Get the function to dispatch the new comment to redux
});

export const MovieCommentForm = connect(mapStateToProps, mapDispatchToState)(
  _MovieCommentForm
);

// TODO uncomment the code below when you're ready to work with redux-form
/**
 * const validate = data => {
  // Implement some validation in this function
  // It validates the form for redux form
  const errors = {};
  return errors;
};

 export const MovieCommentForm = reduxForm({form: 'comments', validate})(
  ConnectedMovieCommentForm
);
**/
