import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AboutModal = () => {
  return (
    <div className="text-white p-0">
      <div className="relative h-48 md:h-64 w-full bg-gradient-to-b from-gray-900 to-[#181818] overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-[10rem] font-bold tracking-tighter">ABOUT</span>
         </div>
        <div className="absolute bottom-8 left-8">
          <h2 className="text-3xl font-bold">Christian Udoh</h2>
          <p className="text-gray-400">Product Designer • Uyo, Nigeria</p>
        </div>
      </div>
      <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Innovative Product Designer with a background in Economics and a focus on building scalable digital solutions. Experienced in designing for Web3, AI, and EdTech sectors, blending aesthetic precision with data-driven user research. Proficient in transforming complex requirements into intuitive interfaces using Figma, supported by foundational technical skills in HTML, CSS, and JavaScript.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E50914]" />
                <a href="mailto:careers.christian@gmail.com" className="hover:underline hover:text-white transition">careers.christian@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E50914]" />
                <span>+234 705 171 9724</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E50914]" />
                <span>21 Efanga Usanga Street, Uyo, Akwaibom State</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-gray-500 text-sm uppercase mb-2 font-bold">Education</h3>
            <div className="mb-4">
              <p className="text-white font-medium">B.Sc. Economics</p>
              <p className="text-gray-400 text-sm">National Open University of Nigeria</p>
              <p className="text-gray-500 text-xs">2021 – 2025</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-500 text-sm uppercase mb-2 font-bold">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Web3", "UI/UX", "HTML/CSS", "Research", "Prototyping", "Design Systems"].map(s => (
                <span key={s} className="border border-gray-600 rounded px-2 py-1 text-xs text-gray-300 hover:border-white hover:text-white transition cursor-default">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
