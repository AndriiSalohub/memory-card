/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import lost from "../../assets/images/lost.jpg";
import "./GameLevel.scss";

const GameLevel = ({
  charactersToDisplay,
  getCharactersToPlayWith,
  setCharactersToPlayWith,
  charactersToPlayWith,
  stateRoundResult,
  shuffle,
  gameState,
  setGameState,
  currentMove,
  setCurrentMove,
  difficulty,
}) => {
  useEffect(() => {
    getCharactersToPlayWith();

    return () => {
      setCharactersToPlayWith([]);
      charactersToPlayWith.forEach((character) => {
        character.clicked = false;
      });
    };
  }, []);

  const handleCardClick = (clickedCharacter) => {
    console.log("Card clicked:", clickedCharacter);

    if (gameState !== "ongoing") return;

    if (clickedCharacter.clicked) {
      setGameState("lost");
      return;
    }

    const updatedCharacters = charactersToPlayWith.map((character) =>
      character === clickedCharacter
        ? { ...character, clicked: true }
        : character,
    );

    setCharactersToPlayWith(updatedCharacters);

    if (updatedCharacters.every((character) => character.clicked)) {
      setCurrentMove((move) => move + 1);
      setGameState("won");
    } else {
      stateRoundResult(clickedCharacter);
      setTimeout(() => {
        shuffle(updatedCharacters);
        setCurrentMove((move) => move + 1);
      }, 300);
    }
  };

  const handleRestart = () => {
    setGameState("ongoing");
    setCurrentMove(0);
    getCharactersToPlayWith();
  };

  return (
    <main className="game-level">
      <ul className="game-level__list">
        {charactersToDisplay.map((character) => (
          <li
            className="game-level__list-item"
            key={character.name}
            onClick={() => handleCardClick(character)}
          >
            <div
              className="game-level__card-image"
              style={{
                backgroundImage: `url(${character.image})`,
              }}
            ></div>
            <p className="game-level__char-name">{character.name}</p>
          </li>
        ))}
      </ul>
      <p className="game-level__state">
        {currentMove} / {difficulty}
      </p>
      <section
        className={`game-level__result game-level__result_lose ${gameState === "lost" ? "result" : ""}`}
      >
        <h2 className="game-level__title game-level__title_lose">You lose!</h2>
        <button
          className="game-level__restart-button white-button"
          onClick={() => handleRestart()}
        >
          Restart
        </button>
      </section>
      <section
        className={`game-level__result game-level__result_win ${gameState === "won" ? "result" : ""}`}
      >
        <h2 className="game-level__title game-level__title_win">You win!</h2>
        <button
          className="game-level__restart-button white-button"
          onClick={() => handleRestart()}
        >
          Restart
        </button>
      </section>
      <div
        className={`overlay ${gameState !== "ongoing" ? "game-end" : ""}`}
      ></div>
    </main>
  );
};

export default GameLevel;
