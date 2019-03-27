import React from 'react';
import PropTypes from 'prop-types';
import {movie} from '../types/movie';
import genres from '../mocks/genres.json';

export class Stats extends React.Component {
  moviesMoreThan8 = movies => {
    return movies.filter(movie => movie.vote_average >= 8);
  };

  numberOfMoviesPerCategory = movies => {
    return genres
      .map(c => [
        c.id,
        c.name,
        movies.filter(movie => movie.genre_ids.indexOf(c.id) >= 0)
      ])
      .map(c => {
        return {
          id: c[0],
          name: c[1],
          size: c[2].length
        };
      });
  };

  render() {
    const {selectPage, movies} = this.props;
    const moviesStats = this.moviesMoreThan8(movies);
    const moviesPerCategory = this.numberOfMoviesPerCategory(movies);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="stats">
              <h2>Movies that are rated more than 8/10</h2>
              <table className="table table-inverse table-striped">
                <thead>
                  <tr>
                    <th>Movie</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {moviesStats.map(movie => (
                    <tr key={movie.id}>
                      <td>{movie.title}</td>
                      <td>{movie.vote_average}/10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2>Number of movies per category</h2>
              <table className="table table-inverse table-striped">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Number of movies</th>
                  </tr>
                </thead>
                <tbody>
                  {moviesPerCategory.map(c => (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn" onClick={() => selectPage('main')}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  selectPage: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(movie).isRequired
};
