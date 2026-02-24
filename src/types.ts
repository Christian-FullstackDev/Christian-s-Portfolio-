export interface Project {
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
  
  export interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
    logo?: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  