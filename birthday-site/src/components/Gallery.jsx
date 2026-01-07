import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================
   GALLERY DATA
   Referencing images from public/photos/
============================ */
const photos = [
  { src: "/photos/1.jpg", message: "Our latest photo together ❤️" },
  { src: "/photos/2.jpg", message: "You looked very pretty in Navaratri 🥹" },
  { src: "/photos/3.jpg", message: "That sharp kitty gaze 💕" },
  { src: "/photos/4.jpg", message: "Very cute photo 💕" },
  { src: "/photos/5.jpg", message: "See that pretty face with that central maang 💕" },
  { src: "/photos/6.jpg", message: "Date Night 💕" },
  { src: "/photos/7.jpg", message: "Video Calls 💕" },
  { src: "/photos/8.jpg", message: "Phone Repair 💕" },
  { src: "/photos/9.jpg", message: "Ye kiski bbg hai? 💕" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="px-4 py-20 bg-rose-50/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-serif text-rose-800 mb-2">
          Our Memories 📸
        </h2>
        <p className="text-rose-400 font-light italic">Every picture tells a story of us</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white p-4 pb-12 shadow-xl shadow-rose-200/50 border border-rose-100 cursor-pointer rounded-sm hover:shadow-2xl transition-shadow"
            onClick={() => setSelected(p)}
          >
            <div className="overflow-hidden mb-4">
              <img
                src={p.src}
                alt="memory"
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p className="font-serif text-rose-700 text-center tracking-tight leading-tight">
              {p.message}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX / ZOOM EFFECT */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-rose-950/80 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-3 rounded-lg max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-rose-300 transition-colors"
              >
                ✕
              </button>
              <img
                src={selected.src}
                className="rounded-md w-full max-h-[80vh] object-contain"
                alt="Enlarged memory"
              />
              <p className="text-rose-800 text-center text-xl font-serif py-6 italic">
                {selected.message}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;