import React from 'react';
import PropTypes from 'prop-types';
import { Countdown } from 'Components/CommonUI';

const CountdownHours = ({ hoursLeft }) => (
  <Countdown indicator={hoursLeft} label="hours" />
);

CountdownHours.propTypes = {
  hoursLeft: PropTypes.number.isRequired,
};

export default CountdownHours;
