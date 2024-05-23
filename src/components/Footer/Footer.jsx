import { useState, useRef, useEffect, useContext } from "react";
import backgroundMusic from "../../assets/sounds/background_music.mp3";
import musicOn from "../../assets/images/music_sign.svg";
import musicOff from "../../assets/images/music_off.svg";
import soundOn from "../../assets/images/volume.svg";
import soundOff from "../../assets/images/volume_off.svg";
import questioMark from "../../assets/images/question_mark.svg";
import cross from "../../assets/images/cross.svg";
import mabelInfo from "../../assets/images/mabel-info.png";
import { SoundContext } from "../SoundContext/SoundContext";
import "./Footer.scss";

const Footer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRulesOpened, setIsRulesOpened] = useState(false);
  const { playSound, isSoundEnabled, toggleSound } = useContext(SoundContext);

  useEffect(() => {
    audioRef.current.volume = 0.05;
  }, [audioRef]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleRules = () => {
    setIsRulesOpened(!isRulesOpened);
  };

  return (
    <footer className="footer">
      <section className="footer__sounds">
        <button
          className="footer__button footer__button_music"
          onClick={() => {
            toggleAudio(), playSound();
          }}
        >
          <img src={isPlaying ? musicOn : musicOff} alt="music button image" />
        </button>
        <audio ref={audioRef} src={backgroundMusic} loop />
        <button
          className="footer__button footer__button_sound"
          onClick={() => {
            toggleSound(), playSound();
          }}
        >
          <img
            src={isSoundEnabled ? soundOn : soundOff}
            alt="volume button image"
          />
        </button>
      </section>
      <section className="footer__rules">
        <button
          className="footer__button footer__button_rules"
          onClick={() => {
            toggleRules(), playSound();
          }}
        >
          <img
            src={isRulesOpened ? cross : questioMark}
            alt="rules question mark"
          />
        </button>
        <div
          className={
            isRulesOpened
              ? "footer__rules-info footer__rules-info_visible"
              : "footer__rules-info"
          }
        >
          <p>Don't click on the same card twice!</p>
          <p>Click on GRAVITY FALLS logo to go back.</p>
        </div>
        <img
          className={
            isRulesOpened
              ? "footer__rules-image footer__rules-image_visible"
              : "footer__rules-image"
          }
          src={mabelInfo}
          alt="mabel rules"
        />
      </section>
    </footer>
  );
};

export default Footer;
