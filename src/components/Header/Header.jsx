import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <ScoreBoard />
    </header>
  );
};

export default Header;
