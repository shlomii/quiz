import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const Question = ({ question, onAnswer, onNextClick, userAnswer, isLastQuestion, showNextQuestion }) => {
  const { questionText, type, answers, timeLimit } = question;
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (answer) => {
    setAnswered(true);
    onAnswer(answer);
  };

  if (type === 'multipleChoice') {
    const renderAnswerButton = (answer) => {
      return (
        <Button
          key={answer}
          variant="contained"
          fullWidth={false}
          color="primary"
          className="mr-2"
          style={{ marginBottom: '16px' , margin: '0 8px', borderRadius: 10 }}
          onClick={() => handleButtonClick(answer)}
        >
          {answer}
        </Button>
      );
    };

    return (
      <div>
        <h2>{questionText}</h2>
        <div className="answers">{answers.map(renderAnswerButton)}</div>
        <div className="mt-2">
          {timeLeft > 0 ? (
            <p>{`Time left: ${timeLeft} seconds`}</p>
          ) : (
            <Button variant="contained" color="primary" onClick={onNextClick}>
              Next
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (type === 'fillInTheBlank') {
    return (
      <div>
        <h2>{questionText}</h2>
        <TextField
          variant="outlined"
          fullWidth
          onBlur={(e) => {
            setAnswered(true);
            onAnswer(e.target.value);
          }}
        />
        <div className="mt-2">
          {timeLeft > 0 ? (
            <p>{`Time left: ${timeLeft} seconds`}</p>
          ) : (
            <Button variant="contained" color="primary" onClick={onNextClick}>
              Next
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (type === 'trueOrFalse') {
    const renderAnswerButton = (answer) => {
      return (
        <Button
          key={answer}
          variant="outlined"
          color="primary"
          fullWidth
          className="mb-2"
          onClick={() => handleButtonClick(answer)}
        >
          {answer.toString()}
        </Button>
      );
    };

    return (
      <div>
        <h2>{questionText}</h2>
        <div className="answers">{[true, false].map(renderAnswerButton)}</div>
        <div className="mt-2">
          {timeLeft > 0 ? (
            <p>{`Time left: ${timeLeft} seconds`}</p>
          ) : (
            <Button variant="contained" color="primary" onClick={onNextClick}>
              Next
            </Button>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Question;
