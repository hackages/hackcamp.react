import React from 'react';
import PropTypes from 'prop-types';

import {movieProperties} from '../../types/movie';
import {THUMBNAIL_URL} from '../../constants/urls';
import {removeFromCart} from '../../actions/cartActions';
import {connect} from 'react-redux';

const _CartProduct = ({removeFromCart, poster_path, title, id}) =>
  <div className="cart-product">
    <img
      alt="Cover of the movie"
      className="img-thumbnail thumb-cart"
      src={`${THUMBNAIL_URL}${poster_path}`}
    />
    <div>
      <span className="cart-product-title">
        {title}
      </span>
      <button onClick={() => removeFromCart(id)} className="btn btn-delete">
        Delete
      </button>
    </div>
  </div>;

_CartProduct.propTypes = {
  ...movieProperties,
  removeFromCart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
});

export const CartProduct = connect(null, mapDispatchToProps)(_CartProduct);
