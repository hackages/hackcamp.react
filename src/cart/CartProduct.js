import React from 'react';
import PropTypes from 'prop-types';

import {movie} from '../types/movie';
import {THUMBNAIL_URL} from '../constants/urls';

export const CartProduct = ({removeFromCart, poster_path, title, id}) => (
  <div className="cart-product">
    <img
      alt="Cover of the movie"
      className="img-thumbnail thumb-cart"
      src={`${THUMBNAIL_URL}${poster_path}`}
    />
    <div>
      <span className="cart-product-title">{title}</span>

      <button onClick={() => removeFromCart(id)} className="btn btn-delete">
        Delete
      </button>
    </div>
  </div>
);

CartProduct.propTypes = {
  ...movie,
  removeFromCart: PropTypes.func.isRequired
};
