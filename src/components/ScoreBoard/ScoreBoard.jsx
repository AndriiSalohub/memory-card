import "./ScoreBoard.scss";

const ScoreBoard = () => {
  return (
    <section className="scoreboard">
      <div className="scoreboard__current-score">Score: 0</div>
      <div className="scoreboard__best-score">Beset score: 0</div>
    </section>
  );
};

export default ScoreBoard;
