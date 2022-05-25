import React from "react";
import Left from "../../assets/ArrowLeft.svg";

import Right from "../../assets/ArrowRight.svg";

import "./QuestionCard.css";

const QuestionCard = ({
  currentQuestion,
  totalQuestion,
  prevQuestion,
  nextQuestion,
  currentQuestionIndex,
}) => {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestion - 1;

  const { question, incorrectAnswers, correctAnswer } = currentQuestion;

  const allOptions = [correctAnswer, ...incorrectAnswers].sort(
    () => Math.random() - 0.5
  );

  console.log(question, incorrectAnswers, correctAnswer);
  return (
    <div className="card card-lg">
      <div className="card-badge">
        <p className="card-badge-content">
          Question {currentQuestionIndex + 1}/{totalQuestion}
        </p>
      </div>
      <div className="card-text">
        <p className="card-subtitle">{question}</p>
      </div>
      <div className="card-action-column">
        {allOptions.map((option, index) => (
          <button
            disabled={currentQuestionIndex === 10}
            key={option}
            onClick={() => {}}
            className="btn btn-outline btn-primary"
          >
            <p> {option} </p>
          </button>
        ))}
      </div>
      <div className="card-extra-action">
        <button
          disabled={isFirstQuestion}
          onClick={prevQuestion}
          className={
            isFirstQuestion ? "btn btn-disabled" : "btn btn-outline btn-primary"
          }
        >
          <img src={Left} alt="left" />
        </button>
        <button
          disabled={isLastQuestion}
          onClick={nextQuestion}
          className={
            isLastQuestion ? "btn btn-disabled" : "btn btn-outline btn-primary"
          }
        >
          <img src={Right} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
