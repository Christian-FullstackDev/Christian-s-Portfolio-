import { Play, Info, ChevronRight, ChevronLeft, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Figma } from 'lucide-react';
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  figmaLink?: string;
  match: string; // "98% Match"
  duration: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
}

interface Skill {
  category: string;
  items: string[];
}

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Eleos SmartCare",
    category: "HealthTech • ERP • RBAC",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    description: "Architecting a massive Role Based Access Control (RBAC) medical ecosystem for 15 distinct user personas. Designing the complete digital presence including Hospital Marketing Website, Doctor's Mobile App, and Patient Booking App.",
    match: "99% Match",
    duration: "Jan 2026 - Present"
  },
  {
    id: 2,
    title: "Live Well Membership",
    category: "Travel • Membership",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    description: "More than just a vacation plan, it is your gateway to unforgettable journeys and meaningful escapes. Designed for those who value experiences over possessions, unlocking curated travel opportunities.",
    match: "98% Match",
    duration: "2021",
    figmaLink: "https://www.figma.com/design/7jWzxMkTlD6CjsEsGZwaCA/Live-well-Membership?node-id=0-1&t=c2ijjRbtEFQIjSrA-1"
  },
  {
    id: 3,
    title: "Hermex Travels",
    category: "Mobile App • Web3 • AI",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    description: "An innovative travel company integrating AI, AR, and Blockchain technology. Designed and delivered the mobile application UI/UX, successfully launching on Apple App Store and Google Play Store.",
    link: "https://app.hermextravels.com/",
    match: "99% Match",
    duration: "Jan 2025 - July 2025"
  },
  {
    id: 4,
    title: "Chirak Projects",
    category: "EdTech • Dashboard",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    description: "End-to-end UI/UX design of a comprehensive digital education platform in Nasarawa State. Designed streamlined dashboards for multiple user roles (Student, Agent, Admin).",
    match: "97% Match",
    duration: "July 2025 - Dec 2025",
    figmaLink: "https://www.figma.com/design/taH9yeQLkWldm4Un6ywkA7/CHIRAK-PROJECTS?node-id=0-1&t=QfjviOgl7n084Vmm-1"
  },
  {
    id: 5,
    title: "MyElbum App",
    category: "Web App • Responsive",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Led the UI/UX design for the company’s landing page and full scale web application, focusing on responsive layouts and user centric navigation.",
    match: "96% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/6Oq7aHcGCFrjYVAxrToQpK/MYELBUM-APP?node-id=1407-3042&t=5YVU4bwe7xSNRGgw-1"
  },
  {
    id: 6,
    title: "E-Commerce Habitual",
    category: "E-Commerce • Design System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
    description: "Created interactive prototypes and a scalable design system to ensure brand consistency.",
    match: "95% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/h0w9VjwEuwukTFp3kLrpFc/E-commerce-Habitual?node-id=26596-942&t=xhaPxfNZmwZ9MNCU-1"
  },
  {
    id: 7,
    title: "Fleet Management",
    category: "Logistics • Dashboard",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
    description: "A complex dashboard for logistics tracking and vehicle management. Part of U-GO Services fleet management system prototype.",
    match: "95% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/F7rPHYfukodJX2wwhqxTiO/Fleet-1?node-id=92-275&t=smLDMnKg82DPjN4U-1"
  },
  {
    id: 8,
    title: "Stock Investment",
    category: "FinTech • Mobile",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop",
    description: "A FinTech solution focusing on data visualization and ease of trading. Rapid-prototyped during internal hackathons.",
    match: "94% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/xQjMtWwLBc7IwynslgrVP7/Stock-Investment-App?node-id=4-371&t=YcQMWCozoTxszJiT-1"
  },
  {
    id: 9,
    title: "Social Media Clone",
    category: "Social • Prototype",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    description: "A functional high-fidelity prototype mimicking core WhatsApp features to test interaction design skills.",
    match: "90% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/QIJqfo1zyPZz7en9tG4VAf/Whatsapp?node-id=0-1&t=UHhWyxSxkxb4MaRg-1"
  },
  {
    id: 10,
    title: "E-Commerce Platform",
    category: "Web & Mobile • Prototype",
    image: "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=800&auto=format&fit=crop",
    description: "A functional high-fidelity prototype for a comprehensive e-commerce platform, focusing on user interaction and responsive design.",
    match: "92% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/gguqJuXi5oxL2FeTvUdpDW/E-Commerce-App?node-id=34-445&t=cz78ABA3buXviWt2-1"
  }
  
];

const experiences: Experience[] = [
  {
    id: 1,
    company: "Eleos SmartCare",
    role: "Lead Product Designer",
    period: "Jan 2026 – Present",
    description: "Comprehensive Health Management System (Contract/Ongoing).",
    achievements: [
      "Architecting a massive Role Based Access Control (RBAC) medical ecosystem for 15 distinct user personas.",
      "Designed complete digital presence: Hospital Marketing Website, Doctor’s Mobile App, and Patient Booking App.",
      "Streamlined hospital operations ensuring HIPAA compliant security.",
      "Created intricate dashboards for KPIs and financial health.",
      "Developed a unified Design System across web and mobile."
    ]
  },
  {
    id: 2,
    company: "Chirak Projects",
    role: "Senior UI/UX Designer",
    period: "July 2025 – Dec 2025",
    description: "A business group focused on digital transformation and sustainable ventures.",
    achievements: [
      "Spearheaded end-to-end UI/UX design of a comprehensive digital education platform.",
      "Designed streamlined dashboards for Student, Agent, and Admin roles.",
      "Collaborated with developers using HTML/CSS knowledge.",
      "Conducted user journey mapping for non-tech-savvy demographics."
    ]
  },
  {
    id: 3,
    company: "Hermex Travels",
    role: "Product / UI/UX Designer",
    period: "Jan 2025 – July 2025",
    description: "An innovative travel company integrating AI, AR, and Blockchain technology.",
    achievements: [
      "Designed and delivered mobile application UI/UX, launching on App Store and Google Play.",
      "Created high-fidelity mockups for AI-driven travel features.",
      "Established and maintained the company's Design System.",
      "Integrated Web3 wallet connection flows and blockchain transparency features."
    ]
  },
  {
    id: 4,
    company: "U-GO Services & E-Transport",
    role: "UI/UX Designer",
    period: "Oct 2023 – Dec 2024",
    description: "A logistics solution provider for fleet management and staff commuting.",
    achievements: [
      "Designed a comprehensive Fleet Management System prototype.",
      "Participated in internal hackathons to rapid-prototype FinTech and e-commerce solutions.",
      "Refined user flows for 'LiveWell' membership and 'ThinkTrader' onboarding.",
      "Translated business requirements into functional wireframes."
    ]
  }
];

const skills: Skill[] = [
  {
    category: "Core Design",
    items: ["Info Architecture", "RBAC Design", "ERP Design", "Usability Testing", "User Research", "Wireframing", "Prototyping", "Design Systems", "Mobile-First"]
  },
  {
    category: "Tools",
    items: ["Figma", "Sketch", "Adobe Creative Suite", "AI Design Tools"]
  },
  {
    category: "Development",
    items: ["HTML5", "CSS3", "JavaScript", "Web3 Concepts", "Frontend Implementation"]
  },
  {
    category: "Soft Skills",
    items: ["Analytical Thinking", "Agile Collaboration", "Stakeholder Comm", "Design Thinking"]
  }
];

// --- Components ---

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>("/profile.jpg");

  useEffect(() => {
    const savedImage = localStorage.getItem("userProfileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleProfileClick = () => {
    if (isManaging) {
      fileInputRef.current?.click();
      return;
    }

    setIsExiting(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
    // Wait for animation/sound
    setTimeout(() => {
      onComplete();
    }, 2000); 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileImage(result);
        localStorage.setItem("userProfileImage", result);
        setIsManaging(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#141414] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-white text-3xl md:text-5xl font-medium mb-12 tracking-wide">
            {isManaging ? "Choose your profile icon" : "Who's watching?"}
          </h1>
          
          <div className="flex gap-8">
            <div 
              className="group flex flex-col items-center gap-4 cursor-pointer relative"
              onClick={handleProfileClick}
            >
              <div className={`relative w-24 h-24 md:w-40 md:h-40 rounded-md overflow-hidden border-2 transition duration-200 ${isManaging ? 'border-white opacity-80 hover:opacity-100' : 'border-transparent group-hover:border-white'}`}>
                <img 
                  src={profileImage}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop";
                  }}
                  alt="Christian" 
                  className="w-full h-full object-cover"
                />
                {isManaging && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-2 border border-white">
                       <span className="text-white text-xs font-bold">EDIT</span>
                    </div>
                  </div>
                )}
                {!isManaging && <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />}
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

          <button 
            onClick={() => setIsManaging(!isManaging)}
            className={`mt-20 border px-8 py-2 text-lg tracking-widest transition uppercase ${isManaging ? 'bg-white text-black border-white hover:bg-red-600 hover:text-white hover:border-red-600' : 'border-gray-500 text-gray-500 hover:border-white hover:text-white'}`}
          >
            {isManaging ? "Done" : "Manage Profiles"}
          </button>

          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange}
          />

          <audio 
            ref={audioRef} 
            src="https://github.com/masud-rana-27/netflix-clone/blob/main/public/sounds/netflix-intro.mp3?raw=true" 
            preload="auto"
            onError={(e) => console.error("Audio load error:", e)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="text-[#E50914] font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CHRISTIAN</div>
        <div className="flex gap-6 text-sm text-gray-300 font-medium">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition">Home</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition">Projects</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition">Experience</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition">My List</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onMoreInfo }: { onMoreInfo: () => void }) => {
  return (
    <div id="home" className="relative h-[85vh] w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <div className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest text-sm uppercase">
            <span className="text-2xl">N</span>
            <span>Series</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            CHRISTIAN<br/>UDOH
          </h1>
          
          <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base font-medium">
            <span className="text-[#46d369] font-bold">98% Match</span>
            <span>2025</span>
            <span className="border border-gray-500 px-1 text-xs">HD</span>
            <span>Product Designer</span>
            <span>Web3</span>
            <span>AI</span>
          </div>

          <p className="text-lg md:text-xl text-gray-200 line-clamp-3 max-w-xl drop-shadow-md">
            Innovative Product Designer with a background in Economics. Experienced in designing for HealthTech (ERP), Web3, AI, and EdTech sectors, blending aesthetic precision with data-driven user research.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="mailto:careers.christian@gmail.com" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-white/90 transition text-lg">
              <Play className="fill-black w-6 h-6" />
              Contact
            </a>
            <button onClick={onMoreInfo} className="flex items-center gap-2 bg-[#6d6d6eb3] text-white px-6 py-2.5 rounded font-bold hover:bg-[#6d6d6e66] transition text-lg">
              <Info className="w-6 h-6" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

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

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => {
  return (
    <div className="relative h-48 min-w-[300px] md:min-w-[400px] bg-[#181818] rounded-md p-6 hover:bg-[#202020] transition border border-white/10 flex flex-col justify-between group cursor-pointer">
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

// --- Main App Component ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="bg-[#141414] min-h-screen font-sans selection:bg-[#E50914] selection:text-white pb-20 overflow-x-hidden">
      <Navbar />
      
      <Hero onMoreInfo={() => setShowAbout(true)} />

      <div className="-mt-12 relative z-20 space-y-8">
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
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </Row>

        <Row title="Technical Skills" id="skills">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </Row>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-8 py-20 text-gray-500 text-sm">
        <div className="flex gap-4 mb-4">
          <Github className="w-6 h-6 hover:text-white cursor-pointer" />
          <Linkedin className="w-6 h-6 hover:text-white cursor-pointer" />
          <Mail className="w-6 h-6 hover:text-white cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a href="#" className="hover:underline">Audio Description</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="border border-gray-500 p-2 inline-block mb-4 hover:text-white cursor-pointer">
          Service Code
        </div>
        <p>© 2025 Christian Udoh Portfolio</p>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
            <ProjectDetails project={selectedProject} />
          </Modal>
        )}
        {showAbout && (
          <Modal isOpen={showAbout} onClose={() => setShowAbout(false)}>
            <AboutModal />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
