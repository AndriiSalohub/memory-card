import PropTypes from "prop-types";
import "./ScoreBoard.scss";

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <section className="scoreboard">
      <div className="scoreboard__current-score">Score: {score}</div>
      <div className="scoreboard__best-score">Beset score: {bestScore}</div>
    </section>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
