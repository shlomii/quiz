import React from 'react';

const QuizEnd = ({ score, restartQuiz }) => {
  return (
    <div>
      <h1>Quiz Ended!</h1>
      <h2>Your Score: {score}%</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default QuizEnd;
