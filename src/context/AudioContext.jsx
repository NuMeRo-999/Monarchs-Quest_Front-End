import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true); // Nuevo estado

  useEffect(() => {
    audioRef.current = new Audio("/music/MenuTheme.ogg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    const playAudio = () => {
      if (shouldPlay) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Error al reproducir la música:", error);
        });
      }
    };

    playAudio();

    return () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };
  }, [shouldPlay]);

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, setShouldPlay }}>
      {children}
    </AudioContext.Provider>
  );
};
