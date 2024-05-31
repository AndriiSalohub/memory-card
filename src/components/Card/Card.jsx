import PropTypes from "prop-types";
import "../Card/Card.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = ({ character, handleCardClick, isFlipped }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["20.5deg", "-20.5deg"],
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["20.5deg", "-20.5deg"],
  );

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.li
      className={`game-card `}
      key={character.name}
      onClick={() => handleCardClick(character)}
    >
      <motion.div
        className={`game-card__front ${isFlipped ? "flipped" : ""}`}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        style={{
          rotateX,
          rotateY,
        }}
      >
        <motion.div
          className="game-card__image"
          style={{
            backgroundImage: `url(${character.image})`,
          }}
        ></motion.div>
        <div className="game-card__back-image"></div>
        <p className="game-card__char-name">{character.name}</p>
      </motion.div>
      <motion.div className="game-card__back"></motion.div>
    </motion.li>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};

export default Card;
