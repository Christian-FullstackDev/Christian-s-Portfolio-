import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

import { projects, experiences, skills } from '../data';
import { Project, Experience } from './types';

import WelcomeScreen from '../components/WelcomeScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Row from '../components/Row';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import SkillCard from '../components/SkillCard';
import Modal from '../components/Modal';
import ProjectDetails from '../components/ProjectDetails';
import ExperienceDetails from '../components/ExperienceDetails';
import AboutModal from '../components/AboutModal';
import ContactModal from '../components/ContactModal';
import BehanceIcon from '../components/BehanceIcon';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="bg-[#141414] min-h-screen font-sans selection:bg-[#E50914] selection:text-white pb-20 overflow-x-hidden">
      <Navbar />
      
      <Hero onMoreInfo={() => setShowAbout(true)} />

      <div className="mt-8 relative z-20 space-y-8">
        <Row title="Selected Projects" id="projects">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </Row>

        <Row title="Professional Experience" id="experience">
          {experiences.map(exp => (
            <ExperienceCard 
              key={exp.id} 
              exp={exp} 
              onClick={setSelectedExperience}
            />
          ))}
        </Row>

        <Row title="Technical Skills" id="skills">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </Row>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-8 py-12 text-gray-500 text-sm border-t border-white/10 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 hover:text-white cursor-pointer transition" />
            <a href="https://www.linkedin.com/in/christian-udoh-156865344" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition" />
            </a>
            <a href="https://www.behance.net/christianudoh05" target="_blank" rel="noopener noreferrer">
              <BehanceIcon className="w-5 h-5 hover:text-white cursor-pointer transition" />
            </a>
            <div onClick={() => setShowContact(true)}>
              <Mail className="w-5 h-5 hover:text-white cursor-pointer transition" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <button onClick={() => setShowContact(true)} className="hover:underline hover:text-white transition">Contact Us</button>
            <p>© 2025 Christian Udoh Portfolio</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
            <ProjectDetails project={selectedProject} />
          </Modal>
        )}
        {selectedExperience && (
          <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
            <ExperienceDetails exp={selectedExperience} />
          </Modal>
        )}
        {showAbout && (
          <Modal isOpen={showAbout} onClose={() => setShowAbout(false)}>
            <AboutModal />
          </Modal>
        )}
        {showContact && (
          <Modal isOpen={showContact} onClose={() => setShowContact(false)}>
            <ContactModal onClose={() => setShowContact(false)} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
