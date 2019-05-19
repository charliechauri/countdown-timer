import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CountdownIndicator = ({ indicator }) => (
  <p className="countdown__indicator">{indicator}</p>
);

CountdownIndicator.propTypes = {
  indicator: PropTypes.number.isRequired,
};

export default CountdownIndicator;
