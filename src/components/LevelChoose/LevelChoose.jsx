import { useContext } from "react";
import "./LevelChoose.scss";
import logo from "../../assets/images/logo.png";
import { SoundContext } from "../SoundContext/SoundContext";
import { NavLink } from "react-router-dom";

const LevelChoose = () => {
  const { playSound } = useContext(SoundContext);

  return (
    <main className="level-choose">
      <img className="level-choose__logo" src={logo} alt="logo" />
      <section className="level-choose__panel">
        <h1 className="level-choose__title">Memory Game</h1>
        <div className="level-choose__variants">
          <NavLink to="/level/easy">
            <button
              className="level-choose__button level-choose__button-easy button"
              id="easy"
              onClick={() => playSound()}
            >
              Easy
            </button>
          </NavLink>
          <NavLink to="/level/medium">
            <button
              className="level-choose__button level-choose__button-medium button"
              id="medium"
              onClick={() => playSound()}
            >
              Medium
            </button>
          </NavLink>
          <NavLink to="level/hard">
            <button
              className="level-choose__button level-choose__button-hard button"
              id="hard"
              onClick={() => playSound()}
            >
              Hard
            </button>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default LevelChoose;
