import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoveLetter = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  // Cleaned up message string (no backticks inside)
  const fullMessage = "Happy Birthday babyyy kitty! 🎂❤️ I am so grateful for every moment with you. You make my world brighter and my heart happier. I hope all your dreams come true, today and always. 💕Lot of kissies";

  useEffect(() => {
    // Start typing after 2 seconds instead of 5 so she doesn't wait too long
    const timer = setTimeout(() => setShow(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullMessage.length) {
        // Use the character at the specific index to prevent "undefined" errors
        setText(fullMessage.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-rose-100 shadow-inner"
      >
        {/* Handwriting font makes the letter feel personal */}
        <p className="text-rose-700 text-2xl md:text-3xl font-handwriting leading-relaxed min-h-[150px]">
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-6 bg-rose-400 ml-1"
          />
        </p>
        
        {show && text.length === fullMessage.length && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-rose-400 font-serif italic text-lg"
          >
            — Arsh
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default LoveLetter;