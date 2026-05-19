export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  status: "completed" | "in-progress";
  featured: boolean;
  github: string;
  live: string;
  year: number;
  category: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  items: { name: string; level: number }[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  subtitle: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "devops-dashboard",
    title: "DevOps Deployment Dashboard",
    shortDesc: "Real-time tracking of Docker, Kubernetes & CI/CD pipelines with live health metrics and alert system.",
    fullDesc: "Monitoring dashboard for deployment health, rollout signals, and infrastructure visibility.",
    tags: ["Next.js", "TypeScript", "Docker", "Tailwind"],
    status: "completed",
    featured: true,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2025,
    category: "devops",
  },
  {
    id: 2,
    slug: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
    shortDesc: "AI-powered resume scoring with keyword analysis, ATS simulation, and improvement suggestions.",
    fullDesc: "Resume intelligence tool for keyword analysis, ATS feedback, and actionable improvements.",
    tags: ["Node.js", "MongoDB", "React", "NLP"],
    status: "completed",
    featured: true,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2025,
    category: "dashboard",
  },
  {
    id: 3,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDesc: "Full MERN stack shopping platform with Redux state, Stripe payments, and admin dashboard.",
    fullDesc: "Shopping platform with product flow, cart state, Stripe payments, and admin management.",
    tags: ["React", "Redux", "Node.js", "Stripe"],
    status: "in-progress",
    featured: false,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2024,
    category: "ai",
  },
  {
    id: 4,
    slug: "atm-system-java-oop",
    title: "ATM System — Java OOP",
    shortDesc: "Console-based ATM simulation with full OOP design — account management, transactions, PIN auth.",
    fullDesc: "Java OOP console system for account management, authentication, deposits, and withdrawals.",
    tags: ["Java", "OOP", "CLI"],
    status: "completed",
    featured: true,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2024,
    category: "commerce",
  },
  {
    id: 5,
    slug: "cloud-security-lab",
    title: "Cloud Security Lab",
    shortDesc: "Hands-on exercises for identity, access, and policy simulation.",
    fullDesc:
      "An educational sandbox for learning cloud security patterns, attack surface reduction, and identity policy design.",
    tags: ["AWS", "Terraform", "Node.js", "Docker"],
    status: "in-progress",
    featured: false,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2023,
    category: "cloud",
  },
  {
    id: 6,
    slug: "content-lens",
    title: "Content Lens Analytics",
    shortDesc: "A visual analytics layer for content performance and editorial ops.",
    fullDesc:
      "A publishing analytics product with clear content summaries, trend indicators, and actionable editorial metrics.",
    tags: ["Next.js", "Chart.js", "TypeScript", "MongoDB"],
    status: "completed",
    featured: false,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2023,
    category: "analytics",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "layout",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Node.js APIs", level: 86 },
      { name: "Auth / Sessions", level: 80 },
      { name: "Prisma ORM", level: 84 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 76 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "workflow",
    items: [
      { name: "Docker", level: 84 },
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / CI", level: 82 },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2024 — Now",
    title: "MCA at DDU",
    subtitle: "Full-stack and cloud-focused study in Gujarat.",
  },
  {
    year: "2023",
    title: "First Next.js app deployed",
    subtitle: "Shipped a production-ready app and learned the deployment workflow.",
  },
  {
    year: "2022",
    title: "BCA graduation",
    subtitle: "Built a stronger foundation in programming and application development.",
  },
  {
    year: "2021",
    title: "First line of code",
    subtitle: "Started learning JavaScript and the basics of building software.",
  },
];

