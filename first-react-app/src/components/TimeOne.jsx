import React, { useRef } from 'react';
import { useState } from 'react';

function Timer() {
  const timerRef = useRef(0);
  const [count,setCount] = useState(0)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
        setCount(count+1)
      console.log('Timer:', timerRef.current, count);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
export default Timer;
