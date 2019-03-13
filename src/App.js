import React, {Component} from 'react'
import axios from 'axios'

import {Header} from './components/Header'
import {Main} from './components/Main'
import {MovieDetail} from './components/MovieDetail'
import {Cart} from './cart/Cart'
import {SERVER_URL} from './constants/config'
import logo from './images/hackflix_logo.svg'

export class App extends Component {
  state = {
    selectedPage: null,
    movies: [],
    cart: [],
  }

  componentDidMount() {
    // Fetch the movies here from SERVER_URL/movies then update your state accordingly
  }

  selectPage = page => {
    this.setState({selectedPage: page})
  }

  // Shopping Cart

  // Write the following functions that will allow you to add and remove movies from the cart
  // To add a movie to the cart, simply add its ID in this.state.cart array.
  // If the ID is already present, do not add it a second time.

  isInCart = () => {}

  addToCart = () => {}

  removeFromCart = () => {}

  render() {
    const {selectedPage, movies, cart} = this.state
    return (
      <div>
        <Header logo={logo} />

        {selectedPage ? (
          <MovieDetail selectMovie={this.selectPage} movieId={selectedPage} />
        ) : (
          <Main
            movies={movies}
            selectMovie={this.selectPage}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            isInCart={this.isInCart}
          />
        )}

        <Cart products={cart} removeFromCart={this.removeFromCart} />
      </div>
    )
  }
}
