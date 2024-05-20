import { createContext, useState, useRef, useEffect } from "react";
import clickSound from "../../assets/sounds/click.wav";

export const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const volumeRef = useRef(new Audio(clickSound));

  useEffect(() => {
    volumeRef.current.volume = 0.05;
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

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
