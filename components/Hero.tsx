import React from 'react';
import { motion } from 'motion/react';
import { Play, Info } from 'lucide-react';

const Hero = ({ onMoreInfo }: { onMoreInfo: () => void }) => {
  return (
    <div id="home" className="relative h-[85vh] w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <div className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest text-sm uppercase">
            <span className="text-2xl">N</span>
            <span>Series</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            CHRISTIAN<br/>UDOH
          </h1>
          
          <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base font-medium">
            <span className="text-[#46d369] font-bold">98% Match</span>
            <span>2025</span>
            <span className="border border-gray-500 px-1 text-xs">HD</span>
            <span>Product Designer</span>
            <span>Web3</span>
            <span>AI</span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 line-clamp-3 max-w-xl drop-shadow-md">
            Innovative Product Designer with a background in Economics. Experienced in designing for HealthTech (ERP), Web3, AI, and EdTech sectors, blending aesthetic precision with data-driven user research.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="mailto:careers.christian@gmail.com" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-white/90 transition text-lg">
              <Play className="fill-black w-6 h-6" />
              Contact
            </a>
            <button onClick={onMoreInfo} className="flex items-center gap-2 bg-[#6d6d6eb3] text-white px-6 py-2.5 rounded font-bold hover:bg-[#6d6d6e66] transition text-lg">
              <Info className="w-6 h-6" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
