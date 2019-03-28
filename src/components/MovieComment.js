import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteComment} from '../actions/commentsActions';

class _MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired,
    token: PropTypes.string,
    dispatchDelete: PropTypes.func.isRequired,
    movieId: PropTypes.number.isRequired
  };

  deleteComment = e => {
    e.preventDefault();

    // Call the delete action after the delete request succeeds
    axios
      .delete(`${SERVER_URL}/comments/${this.props.data.id}`, {
        headers: {Authorization: this.props.token}
      })
  };

  render() {
    const {data: {author = '', content = ''}} = this.props;
    return (
      <div className="movie-comment">
        <span onClick={this.deleteComment}>Delete</span>
        <p className="name">{author}</p>
        <p className="comment">{content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToState = ({
  // Give your component an action to dispatch the comments
});

export const MovieComment = connect(mapStateToProps, mapDispatchToState)(
  _MovieComment
);
