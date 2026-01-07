import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import BirthdayCountdown from "./components/BirthdayCountdown";
import Gallery from "./components/Gallery";
import Surprise from "./components/Surprise";
import LoveLetter from "./components/LoveLetter";
import Timeline from "./components/Timeline";
import FloatingHearts from "./components/FloatingHearts";
import Balloons from "./components/Balloons";
import BouquetBuilder from "./components/BouquetBuilder";

function App() {
  const [activeTab, setActiveTab] = useState(null); // 'story' or 'memories'

  return (
    <div className="bg-[#fff5f6] min-h-screen relative overflow-x-hidden">
      <FloatingHearts />
      <Balloons />
      
      {/* 1. TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center pointer-events-none">
        <div className="bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 pointer-events-auto">
          <span className="font-serif text-rose-800 font-bold text-xl">Hi beautiful,</span>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setActiveTab('story')}
            className="bg-rose-400 text-white px-6 py-2 rounded-full shadow-lg hover:bg-rose-500 transition-all font-medium"
          >
            Our Story ✨
          </button>
          <button 
            onClick={() => setActiveTab('memories')}
            className="bg-white text-rose-400 border border-rose-200 px-6 py-2 rounded-full shadow-lg hover:bg-rose-50 transition-all font-medium"
          >
            Memories 📸
          </button>
        </div>
      </nav>

      {/* 2. MAIN CONTENT (CLEAN & MINIMAL) */}
      <div className="relative z-10 pt-20">
        <Hero />
        <BirthdayCountdown />
        <Surprise />
        <LoveLetter />
        <BouquetBuilder />
      </div>

      {/* 3. FULLSCREEN OVERLAYS */}
      <AnimatePresence>
        {activeTab && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[150] bg-[#fffafb] overflow-y-auto p-4 md:p-12"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveTab(null)}
              className="fixed top-8 right-8 z-[160] bg-rose-500 text-white px-6 py-2 rounded-full shadow-xl hover:bg-rose-600 transition-colors"
            >
              ✕ Close
            </button>

            <div className="max-w-6xl mx-auto pt-20">
              {activeTab === 'story' && <Timeline />}
              {activeTab === 'memories' && <Gallery />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;