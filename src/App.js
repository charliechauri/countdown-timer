import React from 'react';
import CountdownTimer from './Components/CountdownTimer';
import './App.css';
import './Styles/colors.css';
import './Styles/sizes.css';

function App() {
  const currentDate = new Date();
  const deadline = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1,
    currentDate.getHours() + 23,
    currentDate.getMinutes() + 27,
    currentDate.getSeconds() + 47,
  );

  return (
    <div className="App">
      <CountdownTimer deadline={deadline} />
    </div>
  );
}

export default App;
