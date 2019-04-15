import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const _ErrorWatcher = ({location}) => {
  if (location.state && location.state.error) {
    return <h2>{location.state.error}</h2>;
  }
  return null;
};

_ErrorWatcher.propTypes = {
  location: PropTypes.object
};

export const ErrorWatcher = withRouter(_ErrorWatcher);
