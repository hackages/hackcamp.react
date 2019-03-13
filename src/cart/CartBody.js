import React from 'react';
import PropTypes from 'prop-types';

import {movie} from '../types/movie';
import {CartProduct} from './CartProduct';

export const CartBody = ({removeFromCart, closeCart, products}) => (
  <div className="cart-body">
    <button className="btn-close btn" onClick={closeCart}>
      X
    </button>
    <ul className="cart-product-list">
      {products.map((product, index) => (
        <li key={index}>
          <CartProduct removeFromCart={removeFromCart} {...product} />
        </li>
      ))}
    </ul>
  </div>
);

CartBody.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(movie).isRequired,
  closeCart: PropTypes.func.isRequired
};
