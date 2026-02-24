import React from 'react';
import { Experience } from '../src/types';

const ExperienceCard: React.FC<{ exp: Experience; onClick: (exp: Experience) => void }> = ({ exp, onClick }) => {
  return (
    <div 
      className="relative h-48 min-w-[300px] md:min-w-[400px] bg-[#181818] rounded-md p-6 hover:bg-[#202020] transition border border-white/10 flex flex-col justify-between group cursor-pointer"
      onClick={() => onClick(exp)}
    >
      <div>
        <h3 className="text-white font-bold text-lg">{exp.company}</h3>
        <p className="text-gray-400 text-sm mb-2">{exp.role}</p>
        <p className="text-xs text-gray-500 mb-4">{exp.period}</p>
        <p className="text-gray-300 text-sm line-clamp-2">{exp.description}</p>
      </div>
      <div className="mt-2">
        <span className="text-xs text-[#E50914] group-hover:underline">View Details</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
