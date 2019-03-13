import React from 'react'
import PropTypes from 'prop-types'
import {Movie} from './Movie'

export const MovieList = props => {
  const {
    isInCart,
    addToCart,
    navClosed,
    selectMovie,
    removeFromCart,
    movies,
  } = props

  let className = 'gallery'
  if (!navClosed) {
    className += ' filter-is-visible'
  }
  return (
    <section className={className}>
      {movies.map(movie => (
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
  )
}

MovieList.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
}
