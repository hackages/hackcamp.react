import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {BACKDROP_URL_780} from '../constants/urls';
import {MovieComments} from './MovieComments';
import {SERVER_URL} from '../constants/config';

export class MovieDetail extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    this.fetchMovieDetails(this.props.movieId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId !== this.props.movieId) {
      this.fetchMovieDetails(nextProps.movieId);
    }
  }

  async fetchMovieDetails(id) {
    const {data: movie} = await axios.get(`${SERVER_URL}/movies/${id}`);
    this.setState({movie});
  }

  render() {
    const {movie} = this.state;
    if (!movie) {
      return <h1>Loading ...</h1>;
    }
    const {title, backdrop_path, overview, release_date, vote_average} = movie;
    return (
      <div>
        <div className="card mb-3 movie-card">
          <div className="card-block">
            <div className="card-bkg">
              <div className="hero-vignette" />
              <img
                alt="Movie Cover"
                className="card-imt-top"
                src={BACKDROP_URL_780 + backdrop_path}
              />
            </div>
            <div className="card-block-detail">
              <h1 className="black">{title}</h1>
              <p className="rating">
                <span>{vote_average}</span> / 10
              </p>
              <p className="date">{release_date}</p>
              <p>{overview}</p>
              <button
                className="btn btn-primary"
                onClick={() => this.props.selectMovie(null)}
              >
                Back
              </button>
            </div>
            <div className="card-block-footer">
              <MovieComments movieId={this.props.movieId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectMovie: PropTypes.func.isRequired
};
