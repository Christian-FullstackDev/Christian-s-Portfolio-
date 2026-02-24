import React, { useState, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Row = ({ title, children, id }: { title: string, children: ReactNode, id?: string }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id={id} className="space-y-2 md:space-y-4 my-8 pl-4 md:pl-12 group relative z-10">
      <h2 className="text-white text-xl md:text-2xl font-semibold hover:text-gray-300 transition cursor-pointer inline-block">
        {title}
        <span className="text-sm text-[#54b9c5] ml-4 opacity-0 group-hover:opacity-100 transition font-normal">Explore All</span>
      </h2>
      
      <div className="group/row relative">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100 text-white ${!isMoved && 'hidden'}`} 
          onClick={() => handleClick('left')} 
        />
        
        <div 
          ref={rowRef}
          className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-4 pb-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100 text-white" 
          onClick={() => handleClick('right')} 
        />
      </div>
    </div>
  );
};

export default Row;
