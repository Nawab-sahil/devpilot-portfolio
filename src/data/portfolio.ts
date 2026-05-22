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

export type ProjectSchemaKind = "SoftwareApplication" | "CreativeWork";

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
  headline: "Engineering Reliable Web Products",
  subheadline: "MCA DDIT '27 · Software Engineer · Production Web Systems, DevOps Automation",
  summary:
    "MCA candidate at Dharmsinh Desai University with a BCA foundation from Saurashtra University. I build production-ready web applications with full-stack engineering, deployment workflows, and technical SEO that supports measurable business outcomes.",
  location: "Jamnagar, Gujarat, India",
  focus: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "GitHub Actions", "PHP", "WordPress", "Java"],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Nawab-sahil/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-nawab" },
    { label: "LeetCode", href: "https://leetcode.com/u/nawabsahil/" },
  ] satisfies SocialLink[],
};

export const education: EducationEntry[] = [
  {
    year: "2025 — 2027",
    title: "MCA — Dharmsinh Desai University",
    subtitle: "Advanced work in software engineering, infrastructure, and product delivery.",
  },
  {
    year: "2022 — 2025",
    title: "BCA — Saurashtra University",
    subtitle: "Built foundations in web systems, databases, and end-to-end software execution.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "junction-taxi-booking",
    title: "Junction Taxi Booking System",
    shortDesc: "Engineered a production taxi booking platform with PHP + WordPress, city-level SEO architecture, and conversion-focused booking workflows.",
    fullDesc: "Designed and shipped a transportation platform with scalable service-page architecture, responsive booking flows, and operational billing support. Prioritized structured content, page performance, and maintainable admin workflows for long-term business operations.",
    tags: ["PHP", "WordPress", "Technical SEO", "MySQL", "Production"],
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
    shortDesc: "Built an ASP.NET assessment platform with secure test flow, automated result processing, and certificate lifecycle management.",
    fullDesc: "Developed a modular academic evaluation system focused on correctness and process reliability. Implemented student tracking, controlled test execution, and automated reporting workflows to reduce manual operations.",
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
    shortDesc: "MERN-based discovery platform with indexed categories, provider workflows, and API-driven listings for local service operations.",
    fullDesc: "Built a service discovery product using MongoDB, Express, React, and Node.js with a focus on scalable data modeling and predictable query performance. Implemented structured listing workflows, category search, and deployment-ready environment configuration.",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
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
    shortDesc: "Reworked WordPress information architecture with local landing-page strategy, technical SEO updates, and conversion-focused service funnels.",
    fullDesc: "Delivered an engineering-led SEO implementation for a regional transportation brand by designing scalable page templates, improving page performance, and structuring intent-based route pages. Supported growth execution with ad-aligned landing experiences.",
    tags: ["WordPress", "Technical SEO", "Core Web Vitals", "Conversion"],
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
    shortDesc: "Implemented search + ads growth system using structured local landing pages, technical SEO hygiene, and campaign-aligned conversion paths.",
    fullDesc: "Built and optimized the traffic-to-booking funnel with location-intent page clusters and platform-level SEO improvements. The project focused on sustainable visibility growth and cleaner lead routing for business operations.",
    tags: ["Technical SEO", "Local SEO", "WordPress", "Google Ads"],
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
    shortDesc: "Developed a business web platform with template consistency, performance optimization, and SEO-ready content architecture.",
    fullDesc: "Shipped a maintainable WordPress implementation with reusable page sections, clean navigation hierarchy, and speed-focused frontend tuning. Structured metadata and content layout were designed for both discoverability and sales clarity.",
    tags: ["WordPress", "Performance", "Technical SEO", "Landing Pages"],
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
    shortDesc: "Implemented a Java OOP transaction engine with account state management, PIN validation, and operation sequencing.",
    fullDesc: "Built a CLI banking simulation to model transaction integrity and object-oriented design patterns. The project emphasizes clean domain boundaries, workflow correctness, and extensible class design.",
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
    shortDesc: "Content platform for destination discovery with structured route pages, categorized indexing, and search-focused content design.",
    fullDesc: "Developing a tourism discovery system with taxonomy-led content architecture and intent-based page organization. Focused on scalable publishing, clean navigation, and robust metadata strategy for discoverability.",
    tags: ["Next.js", "Content Architecture", "Technical SEO"],
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
    shortDesc: "Developer tooling project that bootstraps Dockerized local environments, env templates, and CI-ready scaffolds for faster team onboarding.",
    fullDesc: "Building a StackForge-style automation toolkit that standardizes local setup and deployment paths across projects. Includes container templates, service wiring, environment contracts, and workflow docs for reliable delivery.",
    tags: ["Developer Tooling", "Docker", "PostgreSQL", "GitHub Actions", "DevOps"],
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
    category: "Application Engineering",
    icon: "layout",
    items: [
      { name: "Next.js / React", level: 91 },
      { name: "TypeScript", level: 89 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Systems",
    icon: "server",
    items: [
      { name: "PHP", level: 91 },
      { name: "Node.js / Express", level: 86 },
      { name: "Java", level: 87 },
    ],
  },
  {
    category: "Platform and Search",
    icon: "database",
    items: [
      { name: "WordPress Architecture", level: 95 },
      { name: "Technical SEO", level: 92 },
      { name: "Core Web Vitals", level: 85 },
    ],
  },
  {
    category: "Data and DevOps",
    icon: "workflow",
    items: [
      { name: "PostgreSQL / MySQL / MongoDB", level: 87 },
      { name: "Docker", level: 88 },
      { name: "GitHub Actions (CI/CD)", level: 84 },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2025 — 2027",
    title: "MCA at Dharmsinh Desai University",
    subtitle: "Focused on software engineering, delivery architecture, and infrastructure practices.",
  },
  {
    year: "2022 — 2025",
    title: "BCA at Saurashtra University",
    subtitle: "Built strong fundamentals in application development, data systems, and project execution.",
  },
  {
    year: "2024 — 2025",
    title: "Production Web Delivery for Service Businesses",
    subtitle: "Delivered WordPress + PHP systems with technical SEO, performance improvements, and conversion-driven flows.",
  },
  {
    year: "2023 — 2024",
    title: "Full-Stack and Java Systems Development",
    subtitle: "Built evaluation platforms, MERN workflows, and Java OOP systems with maintainable architecture.",
  },
];

export const SITE_URL = "https://nawabsahil.vercel.app";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSchemaKind(project: Project): ProjectSchemaKind {
  if (project.category === "client-work" || project.category === "marketing") {
    return "CreativeWork";
  }

  return "SoftwareApplication";
}

