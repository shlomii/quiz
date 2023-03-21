import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap'; // import Bootstrap component

const Timer = ({ timeLimit, handleTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
    }
  }, [timeLeft, handleTimeout]);

  return (
    <div>
      <h3>Time Left:</h3>
      {timeLeft > 0 ? (
        <Alert variant="primary">{timeLeft}</Alert>
      ) : (
        <Alert variant="danger">Time's up!</Alert>
      )}
    </div>
  );
};

export default Timer;
