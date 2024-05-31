import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import "./GameLevel.scss";
import Card from "../Card/Card";
import GameResult from "../GameResult/GameResult";
import { SoundContext } from "../SoundContext/SoundContext";

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
  setScore,
}) => {
  const { playFlip } = useContext(SoundContext);
  const [isFlipped, setIsFlipped] = useState(false);

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

    setIsFlipped(true);
    setCharactersToPlayWith(updatedCharacters);

    if (updatedCharacters.every((character) => character.clicked)) {
      setCurrentMove((move) => move + 1);
      setGameState("won");
    } else {
      stateRoundResult(clickedCharacter);
      setTimeout(() => {
        shuffle(updatedCharacters);
        setCurrentMove((move) => move + 1);
        playFlip();
      }, 300);
    }

    setTimeout(() => {
      setIsFlipped(false);
      playFlip();
    }, 1300);
  };

  const handleRestart = () => {
    setGameState("ongoing");
    setCurrentMove(0);
    setScore(0);
    getCharactersToPlayWith();
  };

  return (
    <main className="game-level">
      <ul className="game-level__list">
        {charactersToDisplay.map((character) => (
          <Card
            key={character.name}
            character={character}
            handleCardClick={handleCardClick}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
        ))}
      </ul>
      <p className="game-level__state">
        {currentMove} / {difficulty}
      </p>
      <GameResult gameState={gameState} handleRestart={handleRestart} />
    </main>
  );
};

GameLevel.propTypes = {
  charactersToDisplay: PropTypes.array.isRequired,
  getCharactersToPlayWith: PropTypes.func.isRequired,
  setCharactersToPlayWith: PropTypes.func.isRequired,
  charactersToPlayWith: PropTypes.array.isRequired,
  stateRoundResult: PropTypes.func.isRequired,
  shuffle: PropTypes.func.isRequired,
  gameState: PropTypes.oneOf(["ongoing", "won", "lost"]).isRequired,
  setGameState: PropTypes.func.isRequired,
  currentMove: PropTypes.number.isRequired,
  setCurrentMove: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default GameLevel;
