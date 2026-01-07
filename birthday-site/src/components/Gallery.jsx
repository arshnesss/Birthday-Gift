import { useState } from "react";
import { motion } from "framer-motion";

// ✅ Import images
import img1 from "../assets/photos/1.jpg";
import img2 from "../assets/photos/2.jpg";
import img3 from "../assets/photos/3.jpg";
import img4 from "../assets/photos/4.jpg";
import img5 from "../assets/photos/5.jpg";
import img6 from "../assets/photos/6.jpg";
import img7 from "../assets/photos/7.jpg";
import img8 from "../assets/photos/8.jpg";
import img9 from "../assets/photos/9.jpg";

const photos = [
  { src: img1, message: "Our latest photo together ❤️" },
  { src: img2, message: "You looked very pretty in Navaratri 🥹" },
  { src: img3, message: "That sharp kitty gaze 💕" },
  { src: img4, message: "Very cute photo 💕" },
  { src: img5, message: "See that pretty face with that central maang 💕" },
  { src: img6, message: "Date Night 💕" },
  { src: img7, message: "Video Calls 💕" },
  { src: img8, message: "Phone Repair 💕" },
  { src: img9, message: "Ye kiski bbg hai? 💕" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl text-center text-pink-700 mb-6">
        Our Memories 📸
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ rotate: i % 2 === 0 ? -2 : 2 }}
            className="bg-white p-4 pb-10 shadow-xl border border-pink-100 cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <img
              src={p.src}
              alt="memory"
              className="w-full h-72 object-cover rounded-md"
            />
            <p className="mt-4 text-xl text-pink-600 text-center">
              {p.message}
            </p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white p-4 rounded-xl max-w-lg"
          >
            <img
              src={selected.src}
              className="rounded-xl mb-4 max-h-[70vh] object-contain"
            />
            <p className="text-pink-700 text-center text-lg">
              {selected.message}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
