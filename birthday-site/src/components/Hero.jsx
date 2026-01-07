import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const Hero = () => {
  useEffect(() => {
    confetti({
      particleCount: 80, // Reduced count so it's not overwhelming
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f472b6', '#fb7185', '#fff1f2']
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative bg-transparent">
      {/* Soft gradient blobs for a dreamy background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-rose-100 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-100 rounded-full blur-[120px] opacity-60" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10 text-center px-6"
      >
        {/* We use a deeper, muted Rose-800 instead of bright pink */}
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-rose-800 mb-6 tracking-tight"
        >
          Happy Birthday, <br />
          <span className="italic font-light text-rose-600/80">my love.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] w-24 bg-rose-200 mx-auto mb-6"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg md:text-xl text-slate-500 font-light max-w-md mx-auto leading-relaxed"
        >
          A small digital space filled with all the reasons 
          why you’re so incredibly special to me.
        </motion.p>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-rose-300 text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;