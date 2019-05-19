import React from 'react';
import PropTypes from 'prop-types';
import { Countdown } from 'Components/CommonUI';

const CountdownSeconds = ({ secondsLeft }) => (
  <Countdown indicator={secondsLeft} label="seconds" />
);

CountdownSeconds.propTypes = {
  secondsLeft: PropTypes.number.isRequired,
};

export default CountdownSeconds;
