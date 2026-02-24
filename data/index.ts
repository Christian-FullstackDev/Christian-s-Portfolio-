import { Project, Experience, Skill } from '../src/types';

export const projects: Project[] = [
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
    image: "./image/Lives.jpg",
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
    image: "./image/Chirak.jpg",
    description: "End-to-end UI/UX design of a comprehensive digital education platform in Nasarawa State. Designed streamlined dashboards for multiple user roles (Student, Agent, Admin).",
    match: "97% Match",
    duration: "July 2025 - Dec 2025",
    figmaLink: "https://www.figma.com/design/taH9yeQLkWldm4Un6ywkA7/CHIRAK-PROJECTS?node-id=0-1&t=QfjviOgl7n084Vmm-1"
  },
  {
    id: 5,
    title: "MyElbum App",
    category: "Web App • Responsive",
    image: './image/MyElbum.jpg',
    description: "Led the UI/UX design for the company’s landing page and full scale web application, focusing on responsive layouts and user centric navigation.",
    match: "96% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/6Oq7aHcGCFrjYVAxrToQpK/MYELBUM-APP?node-id=1407-3042&t=5YVU4bwe7xSNRGgw-1"
  },
  {
    id: 6,
    title: "E-Commerce Habitual",
    category: "E-Commerce • Design System",
    image: "./image/Hab.jpg",
    description: "Created interactive prototypes and a scalable design system to ensure brand consistency.",
    match: "95% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/h0w9VjwEuwukTFp3kLrpFc/E-commerce-Habitual?node-id=26596-942&t=xhaPxfNZmwZ9MNCU-1"
  },
  {
    id: 7,
    title: "Fleet Management",
    category: "Logistics • Dashboard",
    image: "./image/Fleet.jpg",
    description: "A complex dashboard for logistics tracking and vehicle management. Part of U-GO Services fleet management system prototype.",
    match: "95% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/F7rPHYfukodJX2wwhqxTiO/Fleet-1?node-id=92-275&t=smLDMnKg82DPjN4U-1"
  },
  {
    id: 8,
    title: "Stock Investment",
    category: "FinTech • Mobile",
    image: "./image/Stock.jpg",
    description: "A FinTech solution focusing on data visualization and ease of trading. Rapid-prototyped during internal hackathons.",
    match: "94% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/xQjMtWwLBc7IwynslgrVP7/Stock-Investment-App?node-id=4-371&t=YcQMWCozoTxszJiT-1"
  },
  {
    id: 9,
    title: "Social Media Clone",
    category: "Social • Prototype",
    image: "./image/What.jpg",
    description: "A functional high-fidelity prototype mimicking core WhatsApp features to test interaction design skills.",
    match: "90% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/QIJqfo1zyPZz7en9tG4VAf/Whatsapp?node-id=0-1&t=UHhWyxSxkxb4MaRg-1"
  },
  {
    id: 10,
    title: "E-Commerce Platform",
    category: "Web & Mobile • Prototype",
    image: "./image/Soso1.jpg",
    description: "A functional high-fidelity prototype for a comprehensive e-commerce platform, focusing on user interaction and responsive design.",
    match: "92% Match",
    duration: "2024",
    figmaLink: "https://www.figma.com/design/gguqJuXi5oxL2FeTvUdpDW/E-Commerce-App?node-id=34-445&t=cz78ABA3buXviWt2-1"
  }
];

export const experiences: Experience[] = [
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

export const skills: Skill[] = [
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
