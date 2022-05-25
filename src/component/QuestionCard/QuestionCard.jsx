import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Left from "../../assets/ArrowLeft.svg";

import Right from "../../assets/ArrowRight.svg";
import { useQuestion } from "../../context/QuestionContext";

import "./QuestionCard.css";

const QuestionCard = ({
  currentQuestion,
  totalQuestion,
  prevQuestion,
  nextQuestion,
  currentQuestionIndex,
}) => {
  const navigate = useNavigate();

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestion - 1;

  const { question, incorrectAnswers, correctAnswer } = currentQuestion;

  const allOptions = [correctAnswer, ...incorrectAnswers];

  const { selectedOption, setSelectedOption, score, setScore } = useQuestion();

  const handleOptionClick = (option) => {
    if (option === correctAnswer) setScore(score + 10);
    setSelectedOption({ ...selectedOption, [currentQuestionIndex]: option });
  };

  const submitQuiz = () => {
    navigate("/result");
  };

  return (
    <div className="question-card">
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
              onClick={() => handleOptionClick(option)}
              className={
                option === selectedOption[currentQuestionIndex]
                  ? "btn  btn-primary"
                  : "btn btn-outline btn-primary"
              }
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
              isFirstQuestion
                ? "btn btn-disabled"
                : "btn btn-outline btn-primary"
            }
          >
            <img src={Left} alt="left" />
          </button>
          <button
            disabled={isLastQuestion}
            onClick={nextQuestion}
            className={
              isLastQuestion
                ? "btn btn-disabled"
                : "btn btn-outline btn-primary"
            }
          >
            <img src={Right} alt="right" />
          </button>
        </div>
      </div>
      {isLastQuestion && (
        <button className="btn btn-primary btn-2x" onClick={submitQuiz}>
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
