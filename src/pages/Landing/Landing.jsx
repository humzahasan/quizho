import React from "react";
import "./Landing.css";
import { Header } from "../../component";
import Hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <div className="landing-container">
        <h1 className="lg-title landing-title">The Ultimate Marvel Quiz</h1>
        <img className="image landing-image" src={Hero} alt="hero" />
        <h2 className="md-title">Are you a true marvel fan ?</h2>
        <Link to="/quiz" className="btn btn-primary btn-2x landing-btn">
          Let's get started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
