import React from 'react'
import PropTypes from 'prop-types'
import {MovieList} from './MovieList'
import {SideBarFilters} from './SideBarFilters'
import {FilterMenu} from './FilterMenu'
import {movie} from '../types/movie'

export class Main extends React.Component {
  state = {
    navHasBeenToggled: true,
  }

  toggle = () =>
    this.setState({
      navHasBeenToggled: !this.state.navHasBeenToggled,
    })

  render() {
    const {navHasBeenToggled} = this.state

    return (
      <main className="main-content">
        <FilterMenu selectPage={this.props.selectMovie} />

        <MovieList
          selectMovie={this.props.selectMovie}
          movies={this.props.movies}
          navHasBeenToggled={navHasBeenToggled}
        />

        <SideBarFilters
          navHasBeenToggled={navHasBeenToggled}
          toggleSidebar={this.toggle}
        />
      </main>
    )
  }
}

Main.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  selectMovie: PropTypes.func.isRequired,
}
