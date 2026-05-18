import { Experience, SocialLink } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    year: '2024',
    title: 'Full Stack Developer',
    description:
      'Building scalable web applications using modern tech stack (Next.js, TypeScript, Tailwind CSS)',
    type: 'achievement',
  },
  {
    id: '2',
    year: '2023',
    title: 'MCA Student',
    description: 'Master of Computer Applications - Focused on Cloud Computing, DevOps, and AI',
    type: 'education',
  },
  {
    id: '3',
    year: '2023',
    title: 'DevOps Enthusiast',
    description:
      'Mastered Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure automation',
    type: 'milestone',
  },
  {
    id: '4',
    year: '2022',
    title: 'Started Learning Web Development',
    description: 'Began journey with HTML, CSS, JavaScript and progressed to modern frameworks',
    type: 'milestone',
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: 'Github',
    label: 'GitHub',
    url: 'https://github.com',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com',
  },
  {
    icon: 'Twitter',
    label: 'Twitter',
    url: 'https://twitter.com',
  },
  {
    icon: 'Mail',
    label: 'Email',
    url: 'mailto:your.email@example.com',
  },
];
