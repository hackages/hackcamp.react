import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({value}) =>
  <li className="counter">
    <a>{value}</a>
  </li>;

Counter.defaultProps = {
  counter: 0
};

Counter.propTypes = {
  value: PropTypes.number.isRequired
};
