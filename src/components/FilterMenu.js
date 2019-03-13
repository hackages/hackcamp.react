import React from 'react';
import PropTypes from 'prop-types';
import {FilterItems} from './FilterItems';

export const FilterMenu = ({selectTab, filters, counter, selectPage}) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems
          counter={counter}
          filters={filters}
          selectTab={selectTab}
          selectPage={selectPage}
        />
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired
};
