import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Movie} from './Movie';
import {getGenreId, movieContainsGenre} from '../libs/utils';
import {connect} from 'react-redux';
import {setCounter} from '../actions/counterActions';

class _MovieList extends Component {
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
    const {navClosed} = this.props;
    const {filteredList} = this.state;
    let className = 'gallery';
    if (!navClosed) {
      className += ' filter-is-visible';
    }
    return (
      <section className={className}>
        {filteredList.map(movie => <Movie key={movie.id} data={movie} />)}
      </section>
    );
  }
}

_MovieList.propTypes = {
  updateCounter: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
  selectedFilter: PropTypes.string.isRequired
};

const mapStateToProps = ({search, ui, movies}) => ({
  ...search,
  navClosed: ui.navClosed,
  movies
});

const mapDispatchToProps = dispatch => ({
  updateCounter: v => dispatch(setCounter(v))
});

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(
  _MovieList
);
