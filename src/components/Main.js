import React from 'react'
import PropTypes from 'prop-types'
import filters from '../mocks/filters'
import {MovieList} from './MovieList'
import {SideBarFilters} from './SideBarFilters'
import {FilterMenu} from './FilterMenu'
import {movie} from '../types/movie'
import {movieContainsGenre, getGenreId} from '../libs/utils'

export class Main extends React.Component {
  state = {
    filters,
    searchValue: null,
    navClosed: true,
    selectedFilter: 'All',
    counter: 0,
    filteredList: [],
  }

  componentWillReceiveProps(props) {}

  selectTab = category => {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category
        return filter
      }),
      selectedFilter: category,
    })
  }

  toggle = () => {
    this.setState({
      navClosed: !this.state.navClosed,
    })
  }

  search = event => this.setState({searchValue: event.target.value})

  updateCounter = counter => this.setState({counter})

  filterMovies = ({searchValue, selectedFilter, movies}) => {
    const filteredList = movies.filter(
      movie =>
        (selectedFilter === 'All' ||
          movieContainsGenre(movie, getGenreId(selectedFilter))) &&
        (!searchValue ||
          movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    )
    this.setState({
      filteredList,
      counter: filteredList.length,
    })
  }

  render() {
    const {
      filters,
      navClosed,
      selectedFilter,
      searchValue,
      filteredList,
    } = this.state

    const {addToCart, isInCart, removeFromCart} = this.props

    return (
      <main className="main-content">
        <FilterMenu
          counter={this.state.counter}
          filters={filters}
          selectTab={this.selectTab}
          selectPage={this.props.selectMovie}
        />

        <MovieList
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          isInCart={isInCart}
          selectMovie={this.props.selectMovie}
          movies={filteredList}
          selectedFilter={selectedFilter}
          searchValue={searchValue}
          navClosed={navClosed}
        />

        <SideBarFilters
          navClosed={navClosed}
          toggle={this.toggle}
          search={this.search}
        />
      </main>
    )
  }
}

Main.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
}
