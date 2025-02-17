import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://chhari07.github.io/glitch/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Heading */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        AMAN KUMAR CHHARI
      </motion.h1>

      {/* Subtitle with glitch effect */}
      <motion.h2
        className="subtitle glitch-text"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        AS META DEV
      </motion.h2>

      {/* Animated Subtitle */}
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Where Aesthetics Meet Algorithms
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="neon-glow mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Enter
      </motion.button>
    </div>
  );
};

// CSS Styles injected dynamically
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Press Start 2P', cursive;
}

/* Hero Section */
.hero-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  z-index: 1;
}

/* Background Video */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Title */
.title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 3px 3px 0px black, -3px -3px 0px black;
}

/* Subtitle Glitch Effect */
.glitch-text {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 3px 3px 0px black, -3px -3px 0px black;
  animation: glitch 0.8s infinite alternate;
}

@keyframes glitch {
  0% { text-shadow: 2px 2px 0px black, -2px -2px 0px black; }
  100% { text-shadow: -2px -2px 0px black, 2px 2px 0px black; }
}

/* Description */
.description {
  font-size: 1.2rem;
  margin-top: 10px;
  opacity: 0.8;
}

/* Button */
.neon-glow {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 24px;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.neon-glow:hover {
  background-color: white;
  color: black;
}
`;

// Inject styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HeroSection;
