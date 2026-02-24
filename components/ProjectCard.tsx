import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../src/types';

const ProjectCard: React.FC<{ project: Project, onClick: (p: Project) => void }> = ({ project, onClick }) => {
  return (
    <motion.div 
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.05, zIndex: 50 }}
    >
      <img
        src={project.image}
        className="rounded-sm object-cover md:rounded w-full h-full"
        alt={project.title}
      />
      <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition" />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/60 to-transparent">
        <p className="text-white text-sm font-bold">{project.title}</p>
        <p className="text-xs text-gray-300">{project.category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
