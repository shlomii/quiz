import React, { useState } from 'react';
import Question from './Question';
import quizData from '../quizData.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const handleAnswer = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
    setShowNextQuestion(true);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowNextQuestion(false);
  };

  const questions = quizData.map((question, index) => (
  <Question
    key={index}
    question={question}
    onAnswer={answer => handleAnswer(index, answer)}
    onNextClick={handleNext}
    userAnswer={userAnswers[index]}
    isLastQuestion={index === quizData.length - 1}
    showNextQuestion={showNextQuestion}
  />

    
  ));

  return (
    <div>
      {questions[currentQuestion]}
    </div>
  );
};

export default Quiz;
