import React from 'react';
import PropTypes from 'prop-types';
import {FilterItems} from './FilterItems';
import {selectTab} from '../actions/searchActions';
import {connect} from 'react-redux';

export const _FilterMenu = ({selectTab, filters, counter}) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems
          counter={counter}
          filters={filters}
          selectTab={selectTab}
        />
      </div>
    </div>
  );
};

_FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired
};

const mapStateToProps = ({search, counter}) => ({
  filters: search.filters,
  counter
});

const mapDispatchToProps = dispatch => ({
  selectTab: tab => dispatch(selectTab(tab))
});

export const FilterMenu = connect(mapStateToProps, mapDispatchToProps)(
  _FilterMenu
);
