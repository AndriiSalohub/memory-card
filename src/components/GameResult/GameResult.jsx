import PropTypes from "prop-types";
import "./GameResult.scss";
import { useContext } from "react";
import { SoundContext } from "../SoundContext/SoundContext";

const GameResult = ({ gameState, handleRestart }) => {
  const { playSound } = useContext(SoundContext);

  return (
    <>
      <section
        className={`game-result game-result__lose ${gameState === "lost" ? "result" : ""}`}
      >
        <h2 className="game-result__title game-result__title_lose">
          You lose!
        </h2>
        <button
          className="game-result__restart-button white-button"
          onClick={() => {
            handleRestart(), playSound();
          }}
        >
          Restart
        </button>
      </section>
      <section
        className={`game-result game-result__win ${gameState === "won" ? "result" : ""}`}
      >
        <h2 className="game-result__title game-result__title_win">You win!</h2>
        <button
          className="game-result__restart-button white-button"
          onClick={() => {
            handleRestart(), playSound();
          }}
        >
          Restart
        </button>
      </section>
      <div
        className={`overlay ${gameState !== "ongoing" ? "game-end" : ""}`}
      ></div>
    </>
  );
};

GameResult.propTypes = {
  gameState: PropTypes.oneOf(["ongoing", "won", "lost"]).isRequired,
  handleRestart: PropTypes.func.isRequired,
};

export default GameResult;
