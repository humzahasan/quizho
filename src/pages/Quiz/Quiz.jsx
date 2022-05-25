import React from "react";
import { Header, QuestionCard } from "../../component";
import "./Quiz.css";
const Quiz = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="quizpage">
      <Header />
      <div className="quizpage-container">
        <div className="quizpage-review">
          <div className="list list-vertical">
            {arr.map((item) => (
              <p className="list-item">
                <p className="sm-text">Question {item}</p>
                <p className="cta-text">Answer {item}</p>
              </p>
            ))}
          </div>
        </div>
        <div className="quizpage-question">
          <QuestionCard />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
