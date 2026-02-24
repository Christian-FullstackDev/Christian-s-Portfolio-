import React from 'react';
import { Skill } from '../src/types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="relative h-40 min-w-[200px] md:min-w-[250px] bg-[#181818] rounded-md p-4 hover:bg-[#202020] transition border-t-4 border-[#E50914]">
      <h3 className="text-white font-bold text-lg mb-3">{skill.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.slice(0, 4).map((item, i) => (
          <span key={i} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
            {item}
          </span>
        ))}
        {skill.items.length > 4 && (
          <span className="text-xs text-gray-500">+{skill.items.length - 4} more</span>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
