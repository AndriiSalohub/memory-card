import "./LevelChoose.scss";
import logo from "../../assets/images/logo.png";

const LevelChoose = () => {
  return (
    <main className="level-choose">
      <img className="level-choose__logo" src={logo} alt="logo" />
      <section className="level-choose__panel">
        <h1 className="level-choose__title">Memory Game</h1>
        <div className="level-choose__variants">
          <button
            className="level-choose__button level-choose__button-easy"
            id="easy"
          >
            Easy
          </button>
          <button
            className="level-choose__button level-choose__button-medium"
            id="medium"
          >
            Medium
          </button>
          <button
            className="level-choose__button level-choose__button-hard"
            id="hard"
          >
            Hard
          </button>
        </div>
      </section>
    </main>
  );
};

export default LevelChoose;
