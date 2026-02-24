import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [profileImage, setProfileImage] = useState<string>("./image/Chris.jpeg");

  useEffect(() => {
    const savedImage = localStorage.getItem("userProfileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleProfileClick = () => {
   

    setIsExiting(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
    // Wait for animation/sound
    setTimeout(() => {
      onComplete();
    }, 2000); 
  };

  

  return (
    <>
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#141414] flex flex-col items-center justify-center"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-medium mb-12 tracking-wide">
              {"Who's watching?"}
            </h1>
            
            <div className="flex gap-8">
              <div 
                className="group flex flex-col items-center gap-4 cursor-pointer relative"
                onClick={handleProfileClick}
              >
                <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-md overflow-hidden border-2 transition duration-200 border-transparent group-hover:border-white">
                  <img 
                    src={profileImage}
                    onError={(e) => {
                      e.currentTarget.src = "https://i0.wp.com/apeejay.news/wp-content/uploads/2024/08/Untitled-design-2024-08-14T153220.458.png?resize=740%2C740&ssl=1";
                    }}
                    alt="Christian" 
                    className="w-full h-full object-cover"
                  />
                  
                </div>
                <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition duration-200">Christian</span>
              </div>

              <div className="group flex flex-col items-center gap-4 cursor-pointer opacity-50 hover:opacity-100 transition">
                 <div className="w-24 h-24 md:w-40 md:h-40 rounded-md bg-[#2a2a2a] flex items-center justify-center border-2 border-transparent group-hover:border-white transition duration-200">
                    <span className="text-5xl text-gray-400 group-hover:text-white">+</span>
                 </div>
                 <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition duration-200">Add Profile</span>
              </div>
            </div>

          

          
          </motion.div>
        )}
      </AnimatePresence>
      
      <audio 
        ref={audioRef} 
        src="/nouveau-jingle-netflix.mp3" 
        preload="auto"
        onError={() => console.error("Audio load error")}
      />
    </>
  );
};

export default WelcomeScreen;
