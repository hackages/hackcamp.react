import {combineReducers} from 'redux';
import {auth} from './authReducer';
import {search} from './searchReducer';
import {cart} from './cartReducer';

export const rootReducer = combineReducers({
  auth,
  search,
  cart
});
