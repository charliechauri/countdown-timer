import React from 'react';
import PropTypes from 'prop-types';
import { Countdown } from 'Components/CommonUI';

const CountdownMinutes = ({ minutesLeft }) => (
  <Countdown indicator={minutesLeft} label="minutes" />
);

CountdownMinutes.propTypes = {
  minutesLeft: PropTypes.number.isRequired,
};

export default CountdownMinutes;
