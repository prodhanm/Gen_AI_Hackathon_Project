import React, { useState, useEffect } from "react";
import "../style/Hero.css";
import Typewriter from "./Typewriter";

const Hero = () => {
  const [cardSentences, setCardSentences] = useState([
    "Write a 100-character meta description for my blog post about <topic>.",
    "Write a product description for my [product or service or company]",
    "Write a list of 5 YouTube video ideas for [your product or company]",
    "Structure a weekly [newsletter topic] newsletter"
  ]);

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) =>
        (prevIndex + 1) % cardSentences.length
      );
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [cardSentences.length]);

  return (
    <div className="hero-container">
      <div className="intro-words">
        <h1>
          Welcome to{" "}
          <Typewriter text="*Bot Name*" delay={200} infinite />
        </h1>
        <h2>Your loyal dev assistant!</h2>
      </div>
      <div className="card-container">
        <div className="card-content">
          <p>
            <Typewriter
              text={cardSentences[currentSentenceIndex]}
              delay={100}
              infinite
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
