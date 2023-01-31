import React, { useState, useEffect } from 'react';

function TestHumanTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className='all-center'>
      <h3 style={{ marginBottom: '60px' }}>倒數</h3>
      {seconds === 0 ? <h1>Time's up!</h1> : <h1>{seconds}</h1>}
    </div>
  );
}

export default TestHumanTimer;
