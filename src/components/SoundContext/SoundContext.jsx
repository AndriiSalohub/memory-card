import { createContext, useState, useRef, useEffect } from "react";
import clickSound from "../../assets/sounds/click.wav";
import backgroundMusic from "../../assets/sounds/background_music.mp3";

export const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const volumeRef = useRef(new Audio(clickSound));
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    volumeRef.current.volume = 0.05;
    audioRef.current.volume = 0.05;
    audioRef.current.loop = true;
  }, []);

  const playSound = () => {
    if (isSoundEnabled) {
      volumeRef.current.currentTime = 0;
      volumeRef.current.play();
    }
  };

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SoundContext.Provider
      value={{ isSoundEnabled, toggleSound, playSound, isPlaying, toggleAudio }}
    >
      {children}
    </SoundContext.Provider>
  );
};
