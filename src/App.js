import React from "react";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="App container">
      <h1 className="mb-5 text-6xl">Coder's Timer</h1>
      <div className="timer__wrapper flex flex-col items-center p-3">
        <div className="timer__display mr-5">
          <p>{formatTime(time)}</p>
        </div>
        <div className="mb-3">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button mx-5" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
