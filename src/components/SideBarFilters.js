import React from 'react';
import PropTypes from 'prop-types';
import {updateSearch} from '../actions/searchActions';
import {connect} from 'react-redux';
import {closeNav, openNav} from '../actions/uiActions';

const _SideBarFilters = ({navClosed, onChange, closeSideBar, openSideBar}) => {
  return (
    <div>
      <div className={!navClosed ? 'filter filter-is-visible' : 'filter'}>
        <form onSubmit={e => e.preventDefault()}>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input type="search" placeholder="title" onChange={onChange} />
            </div>
          </div>
        </form>
        <a className="hand-cursor close-f" onClick={closeSideBar}>
          Close
        </a>
      </div>

      <a className="hand-cursor filter-trigger" onClick={openSideBar}>
        Filters
      </a>
    </div>
  );
};

_SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  closeSideBar: PropTypes.func.isRequired,
  openSideBar: PropTypes.func.isRequired
};

const mapStateToProps = ({ui}) => ({
  navClosed: ui.navClosed
});

const mapDispatchToProps = dispatch => ({
  onChange: ({target}) => {
    const {value} = target;
    dispatch(updateSearch(value));
  },
  openSideBar: () => dispatch(openNav()),
  closeSideBar: () => dispatch(closeNav())
});

export const SideBarFilters = connect(mapStateToProps, mapDispatchToProps)(
  _SideBarFilters
);
