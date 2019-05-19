import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CountdownLabel = ({ label }) => (
  <p className="countdown__label">{label}</p>
);

CountdownLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CountdownLabel;
