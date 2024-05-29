import logo from "../../assets/images/logo.png";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { SoundContext } from "../SoundContext/SoundContext";

const Header = ({ score, bestScore }) => {
  const { playSound } = useContext(SoundContext);

  return (
    <header className="header">
      <button className="header__button" onClick={() => playSound()}>
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>
      </button>
      <ScoreBoard score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
