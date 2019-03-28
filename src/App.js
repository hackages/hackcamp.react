import React, {Component} from 'react'
import axios from 'axios'

import {Header} from './components/Header'
import {Main} from './components/Main'
import {MovieDetail} from './components/MovieDetail'
import {Stats} from './components/Stats'
import {Cart} from './components/cart/Cart'
import {SERVER_URL} from './constants/config'

export class App extends Component {
  state = {
    selectedPage: null,
    movies: [],
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/movies`)
      .then(movies => movies.data)
      .then(movies => {
        this.setState({movies})
      })
  }

  selectPage = page => {
    this.setState({selectedPage: page})
  }

  render() {
    const {selectedPage, movies} = this.state
    return (
      <div>
        <Header />
        {Number.isInteger(selectedPage) ? (
          <MovieDetail selectMovie={this.selectPage} movieId={selectedPage} />
        ) : selectedPage === 'stats' ? (
          <Stats selectPage={this.selectPage} movies={movies} />
        ) : (
          <Main movies={movies} selectMovie={this.selectPage} />
        )}
        <Cart removeFromCart={this.removeFromCart} movies={movies} />
      </div>
    )
  }
}
