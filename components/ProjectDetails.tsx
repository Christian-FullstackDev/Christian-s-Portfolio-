import React from 'react';
import { Play, Figma } from 'lucide-react';
import { Project } from '../src/types';

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className="text-white">
      <div className="relative h-64 md:h-96 w-full">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{project.title}</h2>
          <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
            <span className="text-[#46d369] font-bold">{project.match}</span>
            <span className="text-gray-400">{project.duration}</span>
            <span className="border border-gray-500 px-1 text-xs">HD</span>
          </div>
          <div className="flex gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-white text-black px-4 py-1.5 md:px-6 md:py-2 rounded font-bold hover:bg-white/90 transition text-sm md:text-base"
              >
                <Play className="fill-black w-4 h-4 md:w-5 md:h-5" /> Visit Site
              </a>
            )}
            {project.figmaLink && (
              <a 
                href={project.figmaLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#2a2a2a] text-white border border-gray-600 px-4 py-1.5 md:px-6 md:py-2 rounded font-bold hover:bg-[#3a3a3a] transition text-sm md:text-base"
              >
                <Figma className="w-4 h-4 md:w-5 md:h-5" /> View Figma
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span className="text-[#E50914] font-bold">New</span>
            <span>{project.category}</span>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
        <div className="text-sm text-gray-400 space-y-2">
          <div><span className="text-gray-500">Category:</span> <span className="text-white ml-2">{project.category}</span></div>
          <div><span className="text-gray-500">Role:</span> <span className="text-white ml-2">Product Designer</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
