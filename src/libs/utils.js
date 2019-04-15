/** A few utility functions used accross the project **/
import genres from '../mocks/genres.json';
import movies from '../mocks/movies.json';

export const getGenreName = id =>
  genres.filter(genre => genre.id === id).map(({name}) => name).join('');
export const getGenreId = name =>
  parseInt(
    genres.filter(genre => genre.name === name).map(({id}) => id).join(''),
    10
  );

export const movieContainsGenre = (movie, genre_id) =>
  movie.genre_ids.reduce(
    (contains, next) => (contains ? contains : next === genre_id),
    false
  );

export const filterMoviesByCat = (movies, genre_id) =>
  movies.filter(movie => movieContainsGenre(movie, genre_id));

export const getPopularFilters = () =>
  genres
    .map(({id}) => id)
    .map(id => ({
      name: getGenreName(id),
      movies: filterMoviesByCat(movies, id)
    }))
    .sort((a, b) => b.movies.length - a.movies.length)
    .map(({name}) => name)
    .map(category => ({
      category,
      selected: false
    }))
    .slice(0, 5)
    .reduce((genres, nextGenre) => [...genres, nextGenre], [
      {category: 'All', selected: true}
    ]);

/**
 * If only one parameter is passed, you'll get all the numbers from 0
 * to your number, your number excluded.
 * If two parameters are passed, you'll get all the numbers from n -> m
 * starting at n and excluding m
 */
export const range = (n = 0, m = 0) =>
  new Array(m !== 0 ? m - n : n).fill(0).map((_, i) => (m !== 0 ? n + i : i));
