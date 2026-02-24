import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden my-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#181818]/50 rounded-full p-2 hover:bg-[#2a2a2a] transition backdrop-blur-md"
        >
          <X className="text-white w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
