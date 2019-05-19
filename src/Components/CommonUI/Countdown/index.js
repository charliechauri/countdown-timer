import React from 'react';
import PropTypes from 'prop-types';
import CountdownIndicator from './CountdownIndicator';
import CountdownLabel from './CountdownLabel';

import './index.css';

const Countdown = ({ indicator, label }) => {
  return (
    <div className="countdown">
      <CountdownIndicator indicator={indicator} />
      <CountdownLabel label={label} />
    </div>
  );
};

Countdown.propTypes = {
  indicator: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Countdown;
