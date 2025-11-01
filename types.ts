
export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  technologies: string[];
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    resume?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    about?: string;
}
