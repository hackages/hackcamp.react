import {SELECT_TAB, UPDATE_SEARCH_VALUE} from '../constants/actions';
import {filters} from '../constants/filters';

export const initialState = {
  searchValue: '',
  filters,
  selectedFilter: 'All'
};

export const search = () => {
  return null;
};
