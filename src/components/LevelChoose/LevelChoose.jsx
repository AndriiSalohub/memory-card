import { useContext } from "react";
import "./LevelChoose.scss";
import logo from "../../assets/images/logo.png";
import { SoundContext } from "../SoundContext/SoundContext";

const LevelChoose = () => {
  const { playSound } = useContext(SoundContext);
  return (
    <main className="level-choose">
      <img className="level-choose__logo" src={logo} alt="logo" />
      <section className="level-choose__panel">
        <h1 className="level-choose__title">Memory Game</h1>
        <div className="level-choose__variants">
          <button
            className="level-choose__button level-choose__button-easy"
            id="easy"
            onClick={() => playSound()}
          >
            Easy
          </button>
          <button
            className="level-choose__button level-choose__button-medium"
            id="medium"
            onClick={() => playSound()}
          >
            Medium
          </button>
          <button
            className="level-choose__button level-choose__button-hard"
            id="hard"
            onClick={() => playSound()}
          >
            Hard
          </button>
        </div>
      </section>
    </main>
  );
};

export default LevelChoose;
