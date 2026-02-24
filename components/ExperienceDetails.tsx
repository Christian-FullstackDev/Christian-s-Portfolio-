import React from 'react';
import { Experience } from '../src/types';

const ExperienceDetails = ({ exp }: { exp: Experience }) => {
  return (
    <div className="text-white p-6 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{exp.company}</h2>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 text-gray-400 text-sm md:text-base">
        <span className="text-white font-medium">{exp.role}</span>
        <span className="hidden md:block">•</span>
        <span>{exp.period}</span>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#E50914]">Overview</h3>
          <p className="text-gray-300 leading-relaxed">
            {exp.description}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 text-[#E50914]">Key Achievements</h3>
          <ul className="space-y-3">
            {exp.achievements.map((achievement, index) => (
              <li key={index} className="flex gap-3 text-gray-300 leading-relaxed">
                <span className="text-[#E50914] mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
