import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

import {BACKDROP_URL_780} from '../constants/urls';
import {MovieComments} from './MovieComments';
import {SERVER_URL} from '../constants/config';
import {connect} from 'react-redux';

class _MovieDetail extends Component {
  state = {
    movie: null
  };

  /*
  * TODO: fetch the movie details with it's movie id
  * the url to get movie details from a movie id: `${SERVER_URL}/movies/${id}`
  */

  /*
  * TODO: handle component update lifecycle
  * */

  render() {
    const {movie} = this.state;
    const {match, loggedIn} = this.props;
    const {params: {id}} = match;
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
                onClick={() => alert('Cannot go back')}
              >
                Back
              </button>
              {loggedIn && (
                <Link to={`/movies/${id}/comments`}>See the comments</Link>
              )}
            </div>
            <div className="card-block-footer">
              /* * TODO: add a subroute on path `/movies/:id/comments` to render
              MovieComments component * the component requires a movieId
              property * */
            </div>
          </div>
        </div>
      </div>
    );
  }
}

_MovieDetail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  loggedIn: PropTypes.bool
};

const mapStateToProps = ({auth}) => ({
  loggedIn: auth.loggedIn
});

export const MovieDetail = connect(mapStateToProps)(_MovieDetail);
