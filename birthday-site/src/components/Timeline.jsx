import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

// 1. DATA ARRAY (Now included so it won't be undefined)
const milestones = [
  {
    date: "Aug 12, 2023",
    title: "Our first photo together ☕",
    description: "I knew from the first hello that you were special.",
    image: "/src/assets/photos/11.jpg", 
  },
  {
    date: "Oct 24, 2023",
    title: "Our First Date ❤️",
    description: "The night that changed everything for me.",
    image: "/src/assets/photos/12.jpg",
  },
  {
    date: "Jan 08, 2024",
    title: "Lucknow Trip 🏞️",
    description: "Our first trip together, filled with laughter and adventure.",
    image: "/src/assets/photos/16.jpg",
  },
  {
    date: "Jan 15, 2024",
    title: "My birthday 🎉",
    description: "We went to Curzon Bridge and had so much fun!",
    image: "/src/assets/photos/14.jpg",
  },
  {
    date: "Feb 02, 2024",
    title: "Cuteeeeenesssss overloaded 😍",
    description: "A very cute photos of us together!",
    image: "/src/assets/photos/17.jpg",
  },
  {
    date: "Feb 14, 2024",
    title: "Another date!!!🥰",
    description: "Another day to cherish our moments together!",
    image: "/src/assets/photos/15.jpg",
  },
  {
    date: "Mar 10, 2024",
    title: "Ashram Outing 🌳",
    description: "We went to Narayani Ashram behind the college!",
    image: "/src/assets/photos/10.jpg",
  },
  {
    date: "Oct 2024",
    title: "Chatt Pooja",
    description: "You looked like an angel in this one!",
    image: "/src/assets/photos/18.jpg",
  },
  {
    date: "Nov 2024",
    title: "Phone not working 404",
    description: "We went to repair you phone haha",
    image: "/src/assets/photos/8.jpg",
  },
  {
    date: "Dec 2024",
    title: "Video Calling Norms",
    description: "When video calls were our lifeline!",
    image: "/src/assets/photos/5.jpg",
  },
  {
    date: "Jan 2025",
    title: "DATE NIGHT!!",
    description: "We reheated our pasta hehe!",
    image: "/src/assets/photos/6.jpg",
  },
  {
    date: "Oct 2024",
    title: "Navaratri Special 🥹",
    description: "We danced and had a greatt timeee!",
    image: "/src/assets/photos/4.jpg",
  },
  {
    date: "Nov 2024",
    title: "Diwali Fun 🎆",
    description: "Cutiee Patootiee!",
    image: "/src/assets/photos/3.jpg",
  },
];

// 2. SUB-COMPONENT FOR EACH ITEM
const TimelineItem = ({ milestone, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-10 items-center mb-24 last:mb-0">
      {/* LEFT SIDE */}
      <div className="flex justify-end">
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white/70 backdrop-blur-md p-5 rounded-3xl shadow-xl shadow-rose-100/40 border border-white w-full max-w-sm text-right"
          >
            <img
              src={milestone.image}
              alt=""
              className="rounded-2xl mb-4 h-48 md:h-64 w-full object-cover"
            />
            <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest">{milestone.date}</span>
            <h4 className="font-serif text-rose-800 text-xl mt-1">{milestone.title}</h4>
            <p className="text-sm text-slate-500 mt-2 font-light italic">{milestone.description}</p>
          </motion.div>
        )}
      </div>

      {/* CENTER DOT */}
      <div className="flex justify-center relative">
        <div className="w-4 h-4 rounded-full bg-rose-400 border-4 border-white shadow-md z-20" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-start">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white/70 backdrop-blur-md p-5 rounded-3xl shadow-xl shadow-rose-100/40 border border-white w-full max-w-sm"
          >
            <img
              src={milestone.image}
              alt=""
              className="rounded-2xl mb-4 h-48 md:h-64 w-full object-cover"
            />
            <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest">{milestone.date}</span>
            <h4 className="font-serif text-rose-800 text-xl mt-1">{milestone.title}</h4>
            <p className="text-sm text-slate-500 mt-2 font-light italic">{milestone.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// 3. MAIN COMPONENT
const Timeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"], 
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 py-20 relative">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-rose-900 italic"
        >
          Our Journey So Far
        </motion.h2>
        <p className="text-rose-400 mt-2 tracking-widest uppercase text-xs font-bold">Scroll to relive the memories</p>
      </div>
      
      {/* THE ANIMATED LINE - Adjusted to span full height */}
      <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-20 w-[2px] bg-rose-100">
        <motion.div
          style={{ scaleY }}
          className="w-full bg-rose-400 h-full origin-top"
        />
      </div>

      <div className="relative z-10">
        {milestones.map((m, i) => (
          <TimelineItem key={i} milestone={m} index={i} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-32 font-serif text-rose-300 italic text-xl"
      >
        To be continued... ❤️
      </motion.div>
    </div>
  );
};

export default Timeline;