import {combineReducers} from 'redux'
import {auth} from './authReducer'
import {search} from './searchReducer'
import {cart} from './cartReducer'
import {counter} from './counterReducer'
import {comments} from './commentByMovie'
import {reducer as formReducer} from 'redux-form'
import {moviesReducer as movies} from './moviesReducer'

export const rootReducer = combineReducers({
  auth,
  search,
  cart,
  counter,
  comments,
  movies,
  form: formReducer,
})
