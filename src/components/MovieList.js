import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Movie} from './Movie'
import {updateCounter} from '../actions/counterActions'
import {getGenreId, movieContainsGenre} from '../libs/utils'
import {connect} from 'react-redux'
import classnames from 'classnames'

class _MovieList extends Component {
  componentDidUpdate(nextProps) {
    if (nextProps.filteredList.length !== this.props.filteredList.length) {
      this.props.updateCounter(this.props.filteredList.length)
    }
  }
  render() {
    const {navHasBeenToggled, selectMovie, filteredList} = this.props
    let className = classnames({
      gallery: true,
      'filter-is-visible': !navHasBeenToggled,
    })
    return (
      <section className={className}>
        {filteredList.map(movie => (
          <Movie selectMovie={selectMovie} key={movie.id} data={movie} />
        ))}
      </section>
    )
  }
}

_MovieList.propTypes = {
  updateCounter: PropTypes.func.isRequired,
  navHasBeenToggled: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
}

const filterMovies = ({searchValue, selectedFilter, movies}) => {
  return movies.filter(
    movie =>
      (selectedFilter === 'All' ||
        movieContainsGenre(movie, getGenreId(selectedFilter))) &&
      (!searchValue ||
        movie.title.toLowerCase().includes(searchValue.toLowerCase()))
  )
}

const mapStateToProps = ({search}, ownProps) => {
  return {
    filteredList: filterMovies({
      searchValue: search.searchValue,
      selectedFilter: search.selectedFilter,
      movies: ownProps.movies,
    }),
  }
}

const mapDispatchToProps = dispatch => ({
  updateCounter: value => dispatch(updateCounter(value)),
})

export const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieList)
