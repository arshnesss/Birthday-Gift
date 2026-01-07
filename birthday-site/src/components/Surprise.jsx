import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const surprises = [
  "You are my favorite person ❤️",
  "I fall for you every single day 💕",
  "You make my day brighter 🌍",
  "Can’t wait to hug you! 🤗",
  "Always miss you and the squeeziess:)",
];

const Surprise = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const random = surprises[Math.floor(Math.random() * surprises.length)];
    setMessage(random);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#fda4af', '#f43f5e', '#fff1f2', '#fb7185']
    });
  };

  return (
    <div className="flex justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-200/20 blur-[120px] rounded-full -z-10" />

      {/* Main Container: Increased width to max-6xl for a 'wide' look */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-white/30 backdrop-blur-md border border-white/50 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
      >
        

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-800 mb-4 italic leading-tight">
              A little note <br /> 
              <span className="text-rose-500/80 not-italic">just for you...</span>
            </h2>
            <p className="text-slate-500 font-light text-lg max-w-sm">
              Whenever you're feeling down or just need a smile, click the gift for a tiny message of how much you mean to me.
            </p>
          </div>

          {/* Right Side: Button & Reveal */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] border-l-0 md:border-l border-rose-100/50 pl-0 md:pl-12">
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="px-10 py-5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl shadow-lg shadow-rose-200 font-serif text-xl flex items-center gap-3 transition-all hover:shadow-rose-300"
            >
              Get a Surprise 🎁
            </motion.button>

            <div className="h-24 mt-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {message && (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    className="bg-white/80 px-6 py-4 rounded-2xl border border-rose-100 shadow-sm"
                  >
                    <p className="text-rose-600 text-2xl font-handwriting text-center">
                      {message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Surprise;