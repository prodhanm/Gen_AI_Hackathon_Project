import React from "react";
import "../style/Hero.css";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="intro-words">
        <h1>
          Welcome to <Typewriter text="*Bot Name*" delay= {500} infinite/>
        </h1>
        <h2>Your loyal dev assistant!</h2>
      </div>
      <div className="card-container">
        <img
          src="path_to_your_image.jpg" 
          alt="Card Image"
          className="card-image"
        />
        <div className="card-content">
          {/* Add card content here */}
          <h3>Card Title</h3>
          <p>Some description about the card.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
