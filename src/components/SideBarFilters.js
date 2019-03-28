import React from 'react'
import PropTypes from 'prop-types'
import {updateSearch} from '../actions/searchActions'
import {connect} from 'react-redux'
import classnames from 'classnames'
const _SideBarFilters = ({navHasBeenToggled, onChange, toggleSidebar}) => {
  const classname = classnames({
    filter: true,
    'filter-is-visible': !navHasBeenToggled,
  })
  return (
    <div>
      <div className={classname}>
        <form onSubmit={e => e.preventDefault()}>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input type="search" placeholder="title" onChange={onChange} />
            </div>
          </div>
        </form>
      </div>

      <a className="hand-cursor filter-trigger" onClick={toggleSidebar}>
        {navHasBeenToggled ? 'Open filters' : 'Close filters'}
      </a>
    </div>
  )
}

_SideBarFilters.propTypes = {
  navHasBeenToggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onChange: ({target}) => {
    const {value} = target
    dispatch(updateSearch(value))
  },
})

export const SideBarFilters = connect(
  null,
  mapDispatchToProps
)(_SideBarFilters)
