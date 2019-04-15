import {Component} from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import {connect} from 'react-redux';
import {getMovies} from '../actions/moviesActions';
import {SERVER_URL} from '../constants/config';

export class _MoviesFetcher extends Component {
  componentDidMount() {
    axios.get(`${SERVER_URL}/movies`).then(movie => movie.data).then(movie => {
      this.props.dispatchGetMovies(movie);
    });
  }

  render() {
    return null;
  }
}

_MoviesFetcher.propTypes = {
  dispatchGetMovies: PropTypes.func.isRequired
};

const mapDispatchToState = dispatch => ({
  dispatchGetMovies: payload => dispatch(getMovies(payload))
});

export const MoviesFetcher = connect(null, mapDispatchToState)(_MoviesFetcher);
