import React from "react";
import Logo from "../../assets/quizho.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
