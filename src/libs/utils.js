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
