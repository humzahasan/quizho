import React, { useState } from "react";
import { Header, QuestionCard } from "../../component";
import { useQuestion } from "../../context/QuestionContext";
import "./Quiz.css";
const Quiz = () => {
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

  const { selectedOption } = useQuestion();

  return (
    <div className="quizpage">
      <Header />
      <div className="quizpage-container">
        <div className="quizpage-review">
          <div className="list list-vertical">
            {Object.keys(selectedOption).map((item) => (
              <div
                className="list-item"
                key={item}
                onClick={() => goToQuestion(Number(item) + 1)}
              >
                <p className="sm-text">Question {Number(item) + 1}</p>
                <p className="cta-text">{selectedOption[item]}</p>
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
