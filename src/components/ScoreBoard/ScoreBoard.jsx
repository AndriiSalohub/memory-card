import "./ScoreBoard.scss";

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <section className="scoreboard">
      <div className="scoreboard__current-score">Score: {score}</div>
      <div className="scoreboard__best-score">Beset score: {bestScore}</div>
    </section>
  );
};

export default ScoreBoard;
