import React from 'react'
import PropTypes from 'prop-types'
import {FilterItems} from './FilterItems'
import {selectTab} from '../actions/searchActions'
import {connect} from 'react-redux'

export const _FilterMenu = ({selectTab, filters, counter, selectPage}) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems
          filters={filters}
          selectTab={selectTab}
          selectPage={selectPage}
        />
      </div>
    </div>
  )
}

_FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  selectPage: PropTypes.func.isRequired,
}

const mapStateToProps = ({search}) => ({
  filters: search.filters,
})

const mapDispatchToProps = dispatch => ({
  selectTab: tab => dispatch(selectTab(tab)),
})

export const FilterMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(_FilterMenu)
