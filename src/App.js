import React from 'react';
import Quiz from './components/Quiz';
import quizData from '../src/quizData.json';

const App = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <Quiz quizData={quizData} />
    </div>
  );
};

export default App;
