import React from 'react';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';
import {ErrorWatcher} from './ErrorWatcher';

export const Main = () =>
  <main className="main-content">
    <FilterMenu />
    <ErrorWatcher />
    <MovieList />
    <SideBarFilters />
  </main>;
