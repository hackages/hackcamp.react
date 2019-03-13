import React from 'react';
import PropTypes from 'prop-types';
import {movie} from '../types/movie';

const shorten = (text, limit = 140) =>
  text
    .split('')
    .slice(0, limit)
    .join('') + '...';

export const MovieBody = ({
  addToCart,
  removeFromCart,
  isInCart,
  showBody,
  data,
  selectMovie
}) => (
  <div className={`movie-body ${showBody ? 'show-movie-body' : ''}`}>
    <h1>{data.title}</h1>
    <p>{shorten(data.overview)}</p>
    {isInCart(data.id) ? (
      <button
        onClick={() => removeFromCart(data.id)}
        className="btn btn-danger"
      >
        Remove from cart
      </button>
    ) : (
      <button onClick={() => addToCart(data.id)} className="btn add">
        Add to cart
      </button>
    )}
    <button className="btn btn-link" onClick={() => selectMovie(data.id)}>
      See details
    </button>
  </div>
);

MovieBody.propTypes = {
  showBody: PropTypes.func.isRequired,
  data: movie,
  selectMovie: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};
