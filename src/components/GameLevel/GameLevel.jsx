/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
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
      setGameState("won");
      setCurrentMove((move) => move + 1);
    } else {
      stateRoundResult(clickedCharacter);
      setTimeout(() => {
        shuffle(updatedCharacters);
        setCurrentMove((move) => move + 1);
      }, 300);
    }
  };

  return (
    <main className="game-level">
      <ul className="game-level__list">
        {charactersToDisplay.map((character, index) => (
          <li className="game-level__list-item" key={character.name}>
            <img
              key={index}
              src={character.image}
              alt={`Character ${index}`}
              className="game-level__image"
              onClick={() => handleCardClick(character)}
            />
            <p className="game-level__char-name">{character.name}</p>
          </li>
        ))}
      </ul>
      <p className="game-level__state">
        {currentMove} / {difficulty}
      </p>
    </main>
  );
};

export default GameLevel;
