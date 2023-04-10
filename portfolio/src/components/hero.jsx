import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';

function Hero() {
  const { darkMode } = useContext(ThemeContext);
  const words = ['BEAUTIFUL', 'ENGAGING', 'CREATIVE', 'FUN'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    setCurrentWord(words[currentWordIndex]);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, words]);

  return (
    <div className={`flex justify-center items-center h-44 pb-8 ${darkMode ? 'graph' : 'bg-white'}`}>
      <h1 className={`text-4xl flex flex-col ${darkMode ? 'text-white' : 'text-black'}`}>
        LET'S MAKE
        <br />
        SOMETHING
        <br />
        <span
          className={`${
            darkMode ? 'text-[#52A9FD]' : 'text-[#E79B56]'
          } fade-in-out`}
        >
          {currentWord}
        </span>
      </h1>
    </div>
  );
}

export default Hero;
