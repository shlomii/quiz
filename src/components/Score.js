import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Score = ({ score, maxScore }) => {
  const percentScore = (score / maxScore) * 100;

  return (
    <div>
      <h2>Your Score:</h2>
      <ProgressBar now={percentScore} label={`${percentScore}%`} />
    </div>
  );
};

export default Score;
