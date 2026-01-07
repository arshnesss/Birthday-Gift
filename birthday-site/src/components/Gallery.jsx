import { useState } from "react";
import { motion } from "framer-motion";

// Replace these with your uploaded photos in src/assets/photos
const photos = [
  { src: "/src/assets/photos/1.jpg", message: "Our latest photo together ❤️" },
  { src: "/src/assets/photos/2.jpg", message: "You looked very pretty in Navaratri🥹" },
  { src: "/src/assets/photos/3.jpg", message: "That sharp kitty gaze 💕" },
  { src: "/src/assets/photos/4.jpg", message: "Very cute photo 💕" },
  { src: "/src/assets/photos/5.jpg", message: "See that pretty face with that central maang 💕" },
  { src: "/src/assets/photos/6.jpg", message: "Date Night 💕" },
  { src: "/src/assets/photos/7.jpg", message: "Video Calls 💕" },
  { src: "/src/assets/photos/8.jpg", message: "Phone Repair 💕" },
  { src: "/src/assets/photos/9.jpg", message: "Ye kiski bbg hai? 💕" },
  
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl text-center text-pink-700 mb-6">Our Memories 📸</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((p, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 0 }}
                initial={{ rotate: i % 2 === 0 ? -2 : 2 }} // Slightly tilts them for a messy look
                className="bg-white p-4 pb-10 shadow-xl border border-pink-100 cursor-pointer"
                onClick={() => setSelected(p)}
            >
                <img src={p.src} alt="memory" className="w-full h-64 object-cover" />
                <p className="mt-4 font-handwriting text-2xl text-pink-600 text-center">
                {p.message}
                </p>
            </motion.div>
            ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white p-4 rounded-xl max-w-lg"
          >
            <img src={selected.src} className="rounded-xl mb-4" />
            <p className="text-pink-700 text-center text-lg">{selected.message}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
