import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

const words = [
  { type: "text", content: "Creative + Efficient 📥" },
  { type: "text", content: "Innovative + Relentless ⚛️" },
  { type: "text", content: "Calculated + Soulful 📜" },
  { type: "text", content: "Dynamic + Limitless ♾️" },
  { type: "image", src: logo, alt: "Logo" }
];

const WordMorph = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const currentWord = words[wordIndex];

  return (
    <div className="word-morph-container mb-32">
      {currentWord.type === 'image' ? (
        <img src={currentWord.src} alt={currentWord.alt} className="morphing-word" />
      ) : (
        <span className="morphing-word">{currentWord.content}</span>
      )}
    </div>
  );
};

export default WordMorph;
