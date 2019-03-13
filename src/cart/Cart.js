import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/cart.css';
import {movie} from '../types/movie';
import {CartBody} from './CartBody';
import shopping_cart from '../images/shopping-cart.svg';

export class Cart extends Component {
  state = {
    open: false,
    count: 42,
    products: []
  };

  // The products props is only an array of IDs
  // Create an array that contains all the movies matching the IDS and store it in state.products

  toggleCart = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {open, products, count} = this.state;
    const {removeFromCart} = this.props;
    return (
      <div className={`cart-wrapper ${open ? 'cart-open' : ''}`}>
        {!open ? (
          <div onClick={this.toggleCart}>
            <img src={shopping_cart} alt="" />
            <span className="counter">{count}</span>{' '}
            {/**This doesnt seem right? Display the current number of items in the cart instead**/}
          </div>
        ) : (
          <CartBody
            removeFromCart={removeFromCart}
            closeCart={this.toggleCart}
            products={products}
          />
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
