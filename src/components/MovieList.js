import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Movie} from './Movie';
import {getGenreId, movieContainsGenre} from '../libs/utils';

export class MovieList extends Component {
  state = {
    filteredList: []
  };

  componentDidMount() {
    this.setState({filteredList: this.props.movies});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({filteredList: nextProps.movies});
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
    const {
      isInCart,
      addToCart,
      navClosed,
      selectMovie,
      removeFromCart
    } = this.props;
    const {filteredList} = this.state;
    let className = 'gallery';
    if (!navClosed) {
      className += ' filter-is-visible';
    }
    return (
      <section className={className}>
        {filteredList.map(movie => (
          <Movie
            removeFromCart={removeFromCart}
            isInCart={isInCart}
            addToCart={addToCart}
            selectMovie={selectMovie}
            key={movie.id}
            data={movie}
          />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  updateCounter: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  selectedFilter: PropTypes.string.isRequired,
  isInCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};
