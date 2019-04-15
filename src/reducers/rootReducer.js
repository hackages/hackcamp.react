import {combineReducers} from 'redux';
import {auth} from './authReducer';
import {search} from './searchReducer';
import {cart} from './cartReducer';
import {comments} from './commentByMovie';
import {reducer as formReducer} from 'redux-form';
import {moviesReducer as movies} from './moviesReducer';
import {counter} from './counterReducer';
import {ui} from './uiReducer';

export const rootReducer = combineReducers({
  auth,
  search,
  cart,
  comments,
  movies,
  counter,
  ui,
  form: formReducer
});
