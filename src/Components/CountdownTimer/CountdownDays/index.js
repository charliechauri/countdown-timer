import React from 'react';
import PropTypes from 'prop-types';
import { Countdown } from 'Components/CommonUI';

const CountdownDays = ({ daysLeft }) => (
  <Countdown indicator={daysLeft} label="days" />
);

CountdownDays.propTypes = {
  daysLeft: PropTypes.number.isRequired,
};

export default CountdownDays;
