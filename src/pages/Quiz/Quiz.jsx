import React, { useState } from "react";
import { Header, QuestionCard } from "../../component";
import { useQuestion } from "../../context/QuestionContext";
import "./Quiz.css";
const Quiz = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { allQuestions } = useQuestion();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const prevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const goToQuestion = (item) => {
    setCurrentQuestionIndex(item - 1);
  };

  return (
    <div className="quizpage">
      <Header />
      <div className="quizpage-container">
        <div className="quizpage-review">
          <div className="list list-vertical">
            {arr.map((item) => (
              <div
                className="list-item"
                key={item}
                onClick={() => goToQuestion(item)}
              >
                <p className="sm-text">Question {item}</p>
                <p className="cta-text">Answer {item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="quizpage-question">
          <QuestionCard
            prevQuestion={prevQuestion}
            nextQuestion={nextQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestion={allQuestions.length}
            currentQuestion={allQuestions[currentQuestionIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
