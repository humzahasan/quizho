import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/quizho.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
