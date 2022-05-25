import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../component";
import { useQuestion } from "../../context/QuestionContext";
import "./Result.css";
const Result = () => {
  const { score } = useQuestion();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="result-page">
        <div className="card card-result">
          <div className="card-text">
            <p className="card-subtitle">
              Your score was{" "}
              <span className="cta-text result-text">{score}</span>
            </p>
            <p className="card-subtitle">
              You answered with the accuracy of
              <span className="cta-text result-text">
                {(score / 100) * 100}%
              </span>
            </p>
            <p className="card-content">Think you can beat your own score ?</p>
          </div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => navigate("/")}
          >
            Play Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
