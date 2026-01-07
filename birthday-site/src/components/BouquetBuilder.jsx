import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const flowerTypes = [
  { id: "rose", emoji: "🌹" },
  { id: "tulip", emoji: "🌷" },
  { id: "sunflower", emoji: "🌻" },
  { id: "cherry", emoji: "🌸" },
  { id: "hibiscus", emoji: "🌺" },
];

const BouquetGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [basket, setBasket] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  // Trigger the "Final Reveal" when she hits 10 flowers
  useEffect(() => {
    if (basket.length === 10) {
      const timer = setTimeout(() => {
        setShowFinal(true);
        // Special flower petal confetti
        const scalar = 2;
        const rose = confetti.shapeFromText({ text: "🌹", scalar });
        const leaf = confetti.shapeFromText({ text: "🍃", scalar });

        confetti({
          shapes: [rose, leaf],
          particleCount: 50,
          spread: 100,
          origin: { y: 0.4 },
          colors: ["#ffc0cb", "#ffb6c1", "#f43f5e"],
        });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [basket]);

  const addFlower = (emoji) => {
    if (basket.length < 10) {
      const randomX = Math.random() * 60 - 30; // Random horizontal
      const randomY = Math.random() * 15;      // Random depth
      const randomRotate = Math.random() * 40 - 20;
      setBasket([
        ...basket,
        { id: Date.now(), emoji, x: randomX, y: randomY, rotate: randomRotate },
      ]);
    }
  };

  const resetGame = () => {
    setBasket([]);
    setShowFinal(false);
  };

  return (
    <>
      {/* 1. THE SIDE STICKER */}
      <motion.div
        whileHover={{ x: -5, scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 cursor-pointer bg-white/90 backdrop-blur-md p-4 rounded-l-3xl shadow-2xl border-l border-y border-rose-100 flex flex-col items-center gap-3 border-r-0"
      >
        <span className="text-3xl animate-bounce">🎁</span>
        <span className="[writing-mode:vertical-rl] text-[12px] font-bold tracking-[0.3em] text-rose-400 uppercase">
          Build a Bouquet
        </span>
      </motion.div>

      {/* 2. THE GAME MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-rose-900/20 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative bg-white/95 p-8 rounded-[3rem] shadow-2xl max-w-md w-full border border-white overflow-hidden"
            >
              {/* Close Button */}
              {!showFinal && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-slate-300 hover:text-rose-500 transition-colors"
                >
                  ✕
                </button>
              )}

              <AnimatePresence mode="wait">
                {!showFinal ? (
                  <motion.div
                    key="game"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="font-serif text-3xl text-rose-800 mb-2">For You</h3>
                      <p className="text-sm text-slate-500 italic">
                        Pick 10 flowers to fill your vase
                      </p>
                    </div>

                    {/* Selection */}
                    <div className="flex justify-around mb-12">
                      {flowerTypes.map((f) => (
                        <motion.button
                          key={f.id}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={() => addFlower(f.emoji)}
                          className="text-4xl drop-shadow-sm"
                        >
                          {f.emoji}
                        </motion.button>
                      ))}
                    </div>

                    {/* VASE AREA */}
                    <div className="relative h-64 flex flex-col items-center justify-end">
                      {/* Flowers sitting inside */}
                      <div className="absolute inset-0 flex items-end justify-center pb-12">
                        {basket.map((f) => (
                          <motion.div
                            key={f.id}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: -f.y, opacity: 1, x: f.x, rotate: f.rotate }}
                            className="absolute text-6xl select-none"
                          >
                            {f.emoji}
                          </motion.div>
                        ))}
                      </div>

                      {/* Layered Vase Container */}
                      <div className="relative w-36 h-36">
                        {/* Back of Vase */}
                        <div className="absolute inset-0 bg-rose-200/30 rounded-b-full rounded-t-xl" />
                        {/* Front of Vase (Higher Z-index) */}
                        <div className="absolute inset-0 border-4 border-white/80 rounded-b-full rounded-t-xl shadow-inner z-20 flex items-center justify-center">
                          <span className="text-4xl opacity-10">🤍</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center items-center">
                      <p className="text-xs font-mono text-rose-300 tracking-widest">
                        {basket.length} / 10 COLLECTED
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* THE FINAL REVEAL ANIMATION */
                  <motion.div
                    key="reveal"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-8xl mb-6"
                    >
                      💐
                    </motion.div>
                    <h2 className="font-serif text-3xl text-rose-800 mb-4 tracking-tight">
                      Here’s a bouquet for you!
                    </h2>
                    <p className="font-handwriting text-2xl text-rose-600 leading-relaxed px-4">
                      Every flower was picked <br /> with love, just for you.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={resetGame}
                      className="mt-10 bg-rose-400 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-rose-200"
                    >
                      Create Another
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BouquetGame;