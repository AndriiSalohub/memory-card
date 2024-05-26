import logo from "../../assets/images/logo.png";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { SoundContext } from "../SoundContext/SoundContext";

const Header = () => {
  const { playSound } = useContext(SoundContext);

  return (
    <header className="header">
      <button className="header__button" onClick={() => playSound()}>
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>
      </button>
      <ScoreBoard />
    </header>
  );
};

export default Header;
