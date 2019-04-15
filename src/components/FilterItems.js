import React from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {connect} from 'react-redux';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {login, logout} from '../actions/authActions';
import {Link, NavLink, withRouter} from 'react-router-dom';

const performLogin = dispatchToken => {
  axios.post(`${SERVER_URL}/login`, {password: 'h4Xflix'}).then(response => {
    dispatchToken(response.data.token);
  });
};

const _FilterItems = ({
  filters,
  selectTab,
  counter,
  loggedIn,
  dispatchToken,
  dispatchLogout
}) => {
  return (
    <div className="filters">
      <ul className="filters-list">
        {filters.map(({category, selected}) => (
          <li key={category} onClick={() => selectTab(category)}>
            {/*
              TODO: transform to NavLink and add `selected` class when selected
              */}
            <a href={`/?genre=${category}`}>{category}</a>
          </li>
        ))}
      </ul>
      <ul className="misc">
        <Counter value={counter} />
        <li>/* TODO: link to `/stats` */</li>
        <li>
          <a
            className="hand-cursor"
            onClick={() =>
              loggedIn ? dispatchLogout() : performLogin(dispatchToken)}
          >
            {loggedIn ? 'Log out' : 'Login'}
          </a>
        </li>
      </ul>
    </div>
  );
};

_FilterItems.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool,
  dispatchToken: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  dispatchToken: token => dispatch(login(token)),
  dispatchLogout: () => dispatch(logout())
});

export const FilterItems = connect(mapStateToProps, mapDispatchToProps)(
  _FilterItems
);
