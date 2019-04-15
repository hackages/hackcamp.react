import {SET_COUNTER} from '../constants/actions';
const initialValue = 0;

export const counter = (state = initialValue, {type, payload}) =>
  type === SET_COUNTER ? payload : state;
