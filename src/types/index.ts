export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  category: 'devops' | 'ai' | 'cloud' | 'frontend' | 'backend';
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'cloud' | 'tools';
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'achievement' | 'milestone';
}
