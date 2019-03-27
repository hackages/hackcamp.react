import React from 'react';
import PropTypes from 'prop-types';

import '../../css/cart.css';
import {CartBody} from './CartBody';
import {connect} from 'react-redux';
import {CartCount} from "./CartCount";

const _Cart = props => {
  const {products, isOpen} = props;
  return (
    // You need to add the 'cart-open' when isOpen is true
    <div className='cart-wrapper'>
      {/** If the cart is open, return <CartBody /> otherwise return <CartCount />**/}
    </div>
  );
};

_Cart.propTypes = {
  products: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

/**
 * From the redux store, extract the isOpen property in the cart reducer
 *
 * You should also give your components a products list
 * You can build the products list from the list of ids stored in the cart reducer and the list of movies in ownProps.movies
 */
const mapStateToProps = (reduxState, ownProps) => {};

export const Cart = connect(mapStateToProps)(_Cart);
