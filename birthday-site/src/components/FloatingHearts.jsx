import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }); // Increased count for better coverage

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => {
        // We calculate randoms here so we can use them in both initial and animate
        const randomX = Math.random() * 100;
        const randomInitialY = Math.random() * 100; // This makes them start anywhere on screen
        const randomDelay = Math.random() * 20;
        const randomDuration = Math.random() * 10 + 15;

        return (
          <motion.div
            key={i}
            initial={{ 
              y: `${randomInitialY}vh`, 
              x: `${randomX}vw`, 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.4, 0.4, 0] 
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: -randomDelay, // NEGATIVE delay makes them start "mid-animation"
              ease: "linear"
            }}
            className="absolute text-rose-200"
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;