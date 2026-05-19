export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  status: "completed" | "in-progress";
  featured: boolean;
  github?: string | null;
  live?: string | null;
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

export type EducationEntry = {
  year: string;
  title: string;
  subtitle: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Nawab Sahil",
  headline: "Build. Rank. Scale. Repeat.",
  subheadline: "WordPress Expert · Full Stack Developer · SEO-First Builder",
  summary:
    "Aspiring MCA Professional (2025–2027) at Dharmasinh Desai University, with a BCA foundation from Saurashtra University (2022–2025). I build dynamic, SEO-friendly, and scalable web applications in PHP, Java, ASP.NET, WordPress, and modern JavaScript stacks.",
  location: "Jamnagar, Gujarat, India",
  focus: ["WordPress", "PHP", "Java", "ASP.NET", "SEO", "DevOps"],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Nawab-sahil/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-nawab" },
    { label: "LeetCode", href: "https://leetcode.com/u/nawabsahil/" },
  ] satisfies SocialLink[],
};

export const education: EducationEntry[] = [
  {
    year: "2025 — 2027",
    title: "MCA — Dharmasinh Desai University",
    subtitle: "Full-stack, DevOps, and SEO-focused software development.",
  },
  {
    year: "2022 — 2025",
    title: "BCA — Saurashtra University",
    subtitle: "Built a strong foundation in web development, databases, and project delivery.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "junction-taxi-booking",
    title: "Junction Taxi Booking System",
    shortDesc: "PHP taxi platform with SEO city pages, billing flow, and responsive booking for drivers and passengers.",
    fullDesc: "Live taxi booking website for Junction Taxi with SEO-friendly landing pages, billing support, and multi-device booking workflows.",
    tags: ["PHP", "WordPress", "SEO", "Billing", "Taxi"],
    status: "completed",
    featured: true,
    github: null,
    live: "https://junctiontaxi.in/",
    year: 2025,
    category: "client-work",
  },
  {
    id: 2,
    slug: "studyiq-online-exam-system",
    title: "StudyIQ Online Examination System",
    shortDesc: "ASP.NET exam suite with secure tests, instant results, student tracking, and certificate generation.",
    fullDesc: "Academic examination platform built with ASP.NET and SQL Server/MySQL style workflows for result printing, certificate generation, and completion-based evaluation.",
    tags: ["ASP.NET", "C#", "SQL Server", "Certificates"],
    status: "completed",
    featured: true,
    github: null,
    live: null,
    year: 2025,
    category: "academic",
  },
  {
    id: 3,
    slug: "local-service-provider",
    title: "Local Service Provider",
    shortDesc: "MCA project for local service discovery, provider listings, and searchable categories.",
    fullDesc: "Service provider platform that helps users discover nearby service businesses with structured listings and category-based navigation.",
    tags: ["Next.js", "React", "TypeScript", "Database"],
    status: "in-progress",
    featured: false,
    github: "https://github.com/Nawab-sahil/LocalServiceProvider",
    live: null,
    year: 2024,
    category: "academic",
  },
  {
    id: 4,
    slug: "dwarkeshcab-wordpress-seo",
    title: "DwarkeshCab WordPress Growth",
    shortDesc: "WordPress taxi site with local SEO, Google Ads, and city landing pages for Gujarat routes.",
    fullDesc: "Scaled a WordPress taxi business with SEO optimization, city-specific service pages, Google Ads support, and conversion-focused content.",
    tags: ["WordPress", "SEO", "Google Ads", "Taxi"],
    status: "completed",
    featured: true,
    github: null,
    live: "http://dwarkeshcab.in/",
    year: 2024,
    category: "client-work",
  },
  {
    id: 5,
    slug: "saurashtra-taxi-growth",
    title: "Saurashtra Taxi SEO & Ads",
    shortDesc: "Local taxi brand growth through SEO landing pages and Google Ads account management.",
    fullDesc: "Worked on SEO structure, city pages, and ad campaign management to improve visibility and booking flow for a local taxi brand.",
    tags: ["SEO", "Google Ads", "Local SEO", "WordPress"],
    status: "completed",
    featured: true,
    github: null,
    live: "https://saurashtrataxi.in/",
    year: 2024,
    category: "marketing",
  },
  {
    id: 6,
    slug: "matriarch-group-website",
    title: "Matriarch Group Website",
    shortDesc: "Professional business site focused on clean structure, speed, and SEO-ready presentation.",
    fullDesc: "A polished business website built to present services clearly and support discoverability with SEO-friendly pages.",
    tags: ["WordPress", "SEO", "Landing Pages"],
    status: "completed",
    featured: false,
    github: null,
    live: "https://matriarchgroup.co.in/",
    year: 2025,
    category: "client-work",
  },
  {
    id: 7,
    slug: "atm-system-java-oop",
    title: "ATM System — Java OOP",
    shortDesc: "Console-based ATM simulation with account management, transactions, and PIN authentication.",
    fullDesc: "Java OOP console system for account management, authentication, deposits, and withdrawals.",
    tags: ["Java", "OOP", "CLI"],
    status: "completed",
    featured: true,
    github: "https://github.com/Nawab-sahil/",
    live: null,
    year: 2024,
    category: "academic",
  },
  {
    id: 8,
    slug: "gujarat-tourism-portal",
    title: "Gujarat Tourism Portal",
    shortDesc: "MCA project for discovering Gujarat destinations with structured pages and tourism-ready content.",
    fullDesc: "A tourism portal concept designed to present Gujarat attractions, travel information, and SEO-friendly destination content.",
    tags: ["Web Design", "Content", "SEO"],
    status: "in-progress",
    featured: false,
    github: null,
    live: null,
    year: 2025,
    category: "academic",
  },
  {
    id: 9,
    slug: "devbox-local-dev-generator",
    title: "DevBox — Local Dev Generator",
    shortDesc: "One-click generator for Docker, env files, README setup, and deployment-ready local environments.",
    fullDesc: "A DevOps-focused project that scaffolds local development environments with Docker, environment templates, deployment notes, and onboarding docs.",
    tags: ["Next.js", "Docker", "PostgreSQL", "NestJS", "DevOps"],
    status: "in-progress",
    featured: true,
    github: null,
    live: null,
    year: 2026,
    category: "devops",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend & UI",
    icon: "layout",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind / Motion", level: 93 },
    ],
  },
  {
    category: "Backend & Apps",
    icon: "server",
    items: [
      { name: "PHP", level: 92 },
      { name: "Java", level: 88 },
      { name: "ASP.NET", level: 86 },
    ],
  },
  {
    category: "CMS & SEO",
    icon: "database",
    items: [
      { name: "WordPress", level: 96 },
      { name: "Technical SEO", level: 92 },
      { name: "Local SEO / Ads", level: 90 },
    ],
  },
  {
    category: "Database & DevOps",
    icon: "workflow",
    items: [
      { name: "MySQL / SQL Server", level: 91 },
      { name: "PostgreSQL / MongoDB", level: 84 },
      { name: "Docker / GitHub Actions", level: 86 },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2025 — 2027",
    title: "MCA at Dharmasinh Desai University",
    subtitle: "Full-stack, DevOps, and SEO-focused professional growth.",
  },
  {
    year: "2022 — 2025",
    title: "BCA at Saurashtra University",
    subtitle: "Built foundations in web development, databases, and software delivery.",
  },
  {
    year: "2024 — 2025",
    title: "WordPress Taxi Growth & SEO",
    subtitle: "Worked on Junction Taxi, DwarkeshCab, and Saurashtra Taxi growth campaigns.",
  },
  {
    year: "2023 — 2024",
    title: "Academic Platforms & Java Systems",
    subtitle: "Built StudyIQ exam software, LocalServiceProvider, and Java ATM system work.",
  },
];

