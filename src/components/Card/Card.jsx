import PropTypes from "prop-types";
import "../Card/Card.scss";

const Card = ({ character, handleCardClick }) => {
  return (
    <li
      className="game-card"
      key={character.name}
      onClick={() => handleCardClick(character)}
    >
      <div
        className="game-card__image"
        style={{
          backgroundImage: `url(${character.image})`,
        }}
      ></div>
      <p className="game-card__char-name">{character.name}</p>
    </li>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default Card;
