import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

/*
* TODO: this component should be used like a Route:
* <ProtectedRoute path="/protected" component={Component} />
* All features of a Route should also work on ProtectedRoute
*
* based on the loggedIn prop, coming from the Redux store, you should render a Route or a Redirect.
*
* Bonus:
* Include a state object in your redirect containing an error (just a string),
* which will be handled by the <ErrorWatcher/> component
**/

export const ProtectedRoute = (
  <div> {"I think there's something wrong with this higher order ...."} </div>
);

// const mapStateToProps = ({auth}) => ({
//   loggedIn: auth.loggedIn
// });
//
// export const ProtectedRoute = connect(mapStateToProps)(_ProtectedRoute);
