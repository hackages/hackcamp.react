import {SELECT_TAB, UPDATE_SEARCH_VALUE} from '../constants/actions';
import {filters} from '../constants/filters';

export const initialState = {
  searchValue: '',
  filters,
  selectedFilter: 'All'
};

const reducer = {
  [UPDATE_SEARCH_VALUE]: (state, searchValue) => ({
    ...state,
    searchValue
  }),
  [SELECT_TAB]: (state, category) => ({
    ...state,
    filters: filters.map(filter => {
      filter.selected = filter.category === category;
      return filter;
    }),
    selectedFilter: category
  })
};

export const search = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
