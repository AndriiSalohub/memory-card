/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GameLevel from "../components/GameLevel/GameLevel.jsx";
import bill from "../assets/images/characters/bill.webp";
import dipper from "../assets/images/characters/dipper.webp";
import ford from "../assets/images/characters/ford.png";
import gideon from "../assets/images/characters/gideon.webp";
import mabel from "../assets/images/characters/mabel.webp";
import robbie from "../assets/images/characters/robbie.webp";
import soos from "../assets/images/characters/soos.webp";
import stan from "../assets/images/characters/stan.webp";
import waddles from "../assets/images/characters/waddles.webp";
import wendy from "../assets/images/characters/wendy.webp";

const characters = [
  { image: bill, name: "Bill", clicked: false },
  { image: dipper, name: "Dipper", clicked: false },
  { image: ford, name: "Ford", clicked: false },
  { image: gideon, name: "Gideon", clicked: false },
  { image: mabel, name: "Mabel", clicked: false },
  { image: robbie, name: "Robbie", clicked: false },
  { image: soos, name: "Soos", clicked: false },
  { image: stan, name: "Stan", clicked: false },
  { image: waddles, name: "Waddles", clicked: false },
  { image: wendy, name: "Wendy", clicked: false },
];

const GamePage = () => {
  const { diff } = useParams();
  const [charactersToPlayWith, setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay, setCharactersToDisplay] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("ongoing");
  const [currentMove, setCurrentMove] = useState(0);

  useEffect(() => {
    let remainingAttemptsValue;
    switch (diff) {
      case "easy":
        remainingAttemptsValue = 5;
        break;
      case "medium":
        remainingAttemptsValue = 7;
        break;
      case "hard":
        remainingAttemptsValue = 10;
        break;
      default:
        remainingAttemptsValue = 5;
    }
    setDifficulty(remainingAttemptsValue);

    let randomCharacters = [];

    while (randomCharacters.length < remainingAttemptsValue) {
      const randNum = Math.floor(Math.random() * 10);
      if (!randomCharacters.includes(characters[randNum])) {
        randomCharacters.push(characters[randNum]);
      }
    }

    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters);
  }, [difficulty]);

  const getCharactersToPlayWith = () => {
    let randomCharacters = [];

    while (randomCharacters.length < difficulty) {
      const randNum = Math.floor(Math.random() * 10);
      if (!randomCharacters.includes(characters[randNum])) {
        randomCharacters.push(characters[randNum]);
      }
    }

    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters);
  };

  const shuffle = (array) => {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length < difficulty - 2) {
      const randNum = Math.floor(Math.random() * array.length);
      const character = array[randNum];
      if (
        !shuffledCharacters.includes(character) &&
        (clicked < difficulty - 2 - 1 || !character.clicked)
      ) {
        shuffledCharacters.push(character);
        clicked += +character.clicked;
      }

      setCharactersToDisplay([...shuffledCharacters]);
    }
  };

  const stateRoundResult = (character) => {
    if (character.clicked) {
      return "lose";
    }
    if (score === difficulty - 1) {
      return "win";
    } else {
      setScore(score + 1);
      return "";
    }
  };

  return (
    <>
      <Header />
      <GameLevel
        getCharactersToPlayWith={getCharactersToPlayWith}
        setCharactersToPlayWith={setCharactersToPlayWith}
        setCharactersToDisplay={setCharactersToDisplay}
        charactersToPlayWith={charactersToPlayWith}
        charactersToDisplay={charactersToDisplay}
        stateRoundResult={stateRoundResult}
        shuffle={shuffle}
        gameState={gameState}
        setGameState={setGameState}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
        difficulty={difficulty}
      />
      <Footer />
    </>
  );
};

export default GamePage;
