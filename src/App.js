import React, {Component} from 'react';
import logo from './images/hackflix_logo.svg';
import filters from './mocks/filters';
import './css/Header.css';
import movies from './mocks/movies';
import {Movie} from "./components/Movie";

export class App extends Component {
  state = {
    movies,
    filters
  };

  selectTab = category => {
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
  };

  openSideBar = () => {
    // We need to toggle the state of the sidebar here to make sure it is in an open state
  };

  render() {
    const {movies, filters} = this.state;
    return (
      <header>
        <img src=logo alt="logo" />
      </header>
      <main class="main-content">
        <div className="tab-filter-wrapper">
          <div className="tab-filter">
            <div className="filters">
              <ul className="filters-list">
                {filters.map(filter =>
                  <li onClick={() => this.selectTab()}>
                    <a className={filter.selected ? 'selected' : ''}>
                      {filter.category}
                    </a>
                  </li>
                )}
              </ul>
              <ul className="misc">
                <li class="counter">
                  <a>42</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
        <section class="gallery">
          {movies.map(movie =>
            <Movie key={movie.id} data={movie} selectMovie={() => {alert("Movie clicked")}} />
          )}
        </section>

        <div>
          {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
          <div className={'filter'}>
            <form onSubmit={e => e.preventDefault()}>
              <div className="filter-block">
                <h4>Search</h4>
                <div className="filter-content">
                  <input type="search" placeholder="title" />
                </div>
              </div>
            </form>
            <a className="hand-cursor close-f" [onClick]="[{(this.openSideBar)}]">Close</a>
          </div>

          <a className="hand-cursor filter-trigger">
            Filters
          </a>
        </div>
      </main>
    );
  }
}
