import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const GamePage = () => {
  const { difficulty } = useParams();

  console.log(difficulty);

  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default GamePage;
