import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const GamePage = () => {
  const { difficulty } = useParams();

  console.log(difficulty);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};

export default GamePage;
