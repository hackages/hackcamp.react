import React from 'react'
import PropTypes from 'prop-types'

export const SideBarFilters = ({navClosed, toggle, search}) => {
  return (
    <div>
      <div className={!navClosed ? 'filter filter-is-visible' : 'filter'}>
        <form onSubmit={e => e.preventDefault()}>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input type="search" placeholder="title" onChange={search} />
            </div>
          </div>
        </form>
        <a className="hand-cursor close-f" onClick={toggle}>
          Close
        </a>
      </div>

      <a className="hand-cursor filter-trigger" onClick={toggle}>
        Filters
      </a>
    </div>
  )
}

SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
}
