import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.timeOutID = null;
    this.state = {
      countdownTimer: {
        days: 0, hours: 0, minutes: 0, seconds: 0,
      },
      timeLeft: this.getTimeLeft(this.props.deadline),
    }

    this.setTimer();
  }

  setTimer() {
    this.timeOutID && clearTimeout(this.timeOutID);
    this.timeOutID = setTimeout(this.updateCountdownTimer.bind(this), 1000);
  }

  updateCountdownTimer() {
    this.setState({
      countdownTimer: this.getTimeLeft(this.props.deadline),
    }, this.setTimer);
  }

  getTimeLeft(deadline) {
    const baseSecondsAndMinutes = 60;
    const baseDays = 24;
    const timeDiff = Date.parse(deadline) - Date.parse(new Date());

    return {
      days: Math.floor(timeDiff / (1000 * baseSecondsAndMinutes * baseSecondsAndMinutes * baseDays)),
      hours: Math.floor((timeDiff / (1000 * baseSecondsAndMinutes * baseSecondsAndMinutes)) % baseDays),
      minutes: Math.floor((timeDiff / 1000 / baseSecondsAndMinutes) % baseSecondsAndMinutes),
      seconds: Math.floor((timeDiff / 1000) % baseSecondsAndMinutes),
    };
  }

  componentWillUnmount() {
    this.timeOutID && clearTimeout(this.timeOutID)
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.countdownTimer;

    return (
      <section className="countdown-timer">
        <CountdownDays daysLeft={days} />
        <CountdownHours hoursLeft={hours} />
        <CountdownMinutes minutesLeft={minutes} />
        <CountdownSeconds secondsLeft={seconds} />
      </section>
    );
  }
}

CountdownTimer.propTypes = {
  deadline: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
