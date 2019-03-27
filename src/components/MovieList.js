import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Movie} from './Movie';
import {getGenreId, movieContainsGenre} from '../libs/utils';
import {connect} from 'react-redux';

/**
 * You should give your component the state of the search reducer
 **/
export class MovieList extends Component {
  state = {
    filteredList: []
  };

  componentDidMount() {
    this.filterMovies(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.movies !== this.props.movies ||
      nextProps.selectedFilter !== this.props.selectedFilter ||
      nextProps.searchValue !== this.props.searchValue
    ) {
      this.filterMovies(nextProps);
    }
  }

  filterMovies = ({searchValue, selectedFilter, movies}) => {
    const filteredList = movies.filter(
      movie =>
        (selectedFilter === 'All' ||
          movieContainsGenre(movie, getGenreId(selectedFilter))) &&
        (!searchValue ||
          movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    );
    this.props.updateCounter(filteredList.length);
    this.setState({
      filteredList
    });
  };

  render() {
    const {navClosed, selectMovie} = this.props;
    const {filteredList} = this.state;
    let className = 'gallery';
    if (!navClosed) {
      className += ' filter-is-visible';
    }
    return (
      <section className={className}>
        {filteredList.map(movie =>
          <Movie selectMovie={selectMovie} key={movie.id} data={movie} />
        )}
      </section>
    );
  }
}

MovieList.propTypes = {
  updateCounter: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  selectedFilter: PropTypes.string.isRequired
};
