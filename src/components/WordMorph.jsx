import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import balowpendergrass from "../assets/images/baloww-pendergrass.png";
import babe from "../assets/images/babe.png";
import geechieLab from "../assets/images/geechie-lab.png";
import hardOn from "../assets/images/hard-on.png";

const words = [
  { type: "text", content: "Creative + Efficient 📥" },
  { type: "text", content: "Innovative + Relentless ⚛️" },
  { type: "text", content: "Calculated + Soulful 📜" },
  { type: "text", content: "Dynamic + Limitless ♾️" },
  { type: "image", src: logo, alt: "Logo" },
  { type: "image", src: balowpendergrass, alt: "Baloww Pendergrass" },
  { type: "image", src: babe, alt: "Babe" },
  { type: "image", src: hardOn, alt: "Hard On" },
  { type: "image", src: geechieLab, alt: "Geech Lab" },
];

const WordMorph = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 1000); // Fade-out time
    }, 3000); // Full display time

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[wordIndex];

  return (
    <div className="word-morph-container mb-32">
      {currentWord.type === "image" ? (
        <img
          src={currentWord.src}
          alt={currentWord.alt}
          className={`morphing-word ${!isFading ? "active" : ""}`}
        />
      ) : (
        <span className={`morphing-word ${!isFading ? "active" : ""}`}>
          {currentWord.content}
        </span>
      )}
    </div>
  );
};

export default WordMorph;
