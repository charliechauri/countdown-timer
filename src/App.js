import React from 'react';
import { Countdown } from './Components/CommonUI';
import './App.css';
import './Styles/colors.css';
import './Styles/sizes.css';

function App() {
  return (
    <div className="App">
      <section className="countdown-timer">
        <Countdown indicator={1} label="Days" />

        <Countdown indicator={23} label="Hours" />

        <Countdown indicator={27} label="Minutes" />

        <Countdown indicator={47} label="Seconds" />
      </section>
    </div>
  );
}

export default App;
