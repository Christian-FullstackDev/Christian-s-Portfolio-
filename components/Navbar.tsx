import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between relative z-50">
        <div className="text-[#E50914] font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CHRISTIAN</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition">Home</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition">Projects</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition">Experience</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition">My List</a>
          <a href="/CHRISTIANUDOHCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Resume</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#141414] border-t border-white/10 md:hidden shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4 text-center text-gray-300 font-medium">
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition py-2">Home</a>
              <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition py-2">Projects</a>
              <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition py-2">Experience</a>
              <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition py-2">My List</a>
              <a href="/CHRISTIANUDOHCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition py-2">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
