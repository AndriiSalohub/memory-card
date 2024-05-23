import { useState, useRef, useEffect, useContext } from "react";
import backgroundMusic from "../../assets/sounds/background_music.mp3";
import musicOn from "../../assets/images/music_sign.svg";
import musicOff from "../../assets/images/music_off.svg";
import soundOn from "../../assets/images/volume.svg";
import soundOff from "../../assets/images/volume_off.svg";
import { SoundContext } from "../SoundContext/SoundContext";
import "./Footer.scss";

const Footer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
    </footer>
  );
};

export default Footer;
