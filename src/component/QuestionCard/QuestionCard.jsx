import React from "react";

const QuestionCard = ({ question, options, currentQuestion }) => {
  return (
    <div className="card card-lg">
      <div className="card-text">
        <p className="card-subtitle">{currentQuestion}</p>
        <p className="card-content">{question} </p>
      </div>
      <div className="card-action">
        {options?.map((option) => (
          <button className="btn btn-outline btn-success">{option}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
