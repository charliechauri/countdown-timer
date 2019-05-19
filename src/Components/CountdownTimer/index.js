import React, { Component } from 'react';
import { Countdown } from '../CommonUI';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: {
        indicator: 1,
        label: 'days',
      },
      hours: {
        indicator: 23,
        label: 'hours',
      },
      minutes: {
        indicator: 27,
        label: 'minutes',
      },
      seconds: {
        indicator: 47,
        label: 'seconds',
      },
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <section className="countdown-timer">
        <Countdown {...days} />

        <Countdown { ...hours } />

        <Countdown { ...minutes } />

        <Countdown { ...seconds } />
      </section>
    );
  }

}

export default CountdownTimer;
