import { NavLink } from "react-router-dom";
import "../styles/ErrorPage.scss";
import { useContext } from "react";
import { SoundContext } from "../components/SoundContext/SoundContext";

const ErrorPage = () => {
  const { playSound } = useContext(SoundContext);

  return (
    <main className="error">
      <h2 className="error__title">This page does not exist!</h2>
      <NavLink to="/">
        <button
          className="error__come-back-button button"
          onClick={() => playSound()}
        >
          Come back
        </button>
      </NavLink>
    </main>
  );
};

export default ErrorPage;
