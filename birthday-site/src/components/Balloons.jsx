import { useEffect } from "react";

const Balloons = () => {
  useEffect(() => {
    const createBalloon = () => {
      const balloon = document.createElement("div");
      // Added opacity-50 and blur to make them softer
      balloon.className = "absolute rounded-full animate-float pointer-events-none opacity-40 blur-[1px]";
      
      const size = Math.random() * 20 + 10; // Smaller, more like confetti
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size * 1.2}px`;
      
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.bottom = `-50px`;
      
      // Use softer, pastel colors
      const colors = ["#FFC0CB", "#FFB6C1", "#FFD700", "#87CEFA", "#98FB98"];
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDuration = `${Math.random() * 5 + 7}s`;

      document.body.appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    };

    const interval = setInterval(createBalloon, 800); // Slower spawn rate
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Balloons;