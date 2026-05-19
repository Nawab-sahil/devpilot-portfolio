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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "devops-dashboard",
    title: "DevOps Deployment Dashboard",
    shortDesc: "Real-time visibility for Docker, Kubernetes, and CI/CD pipeline health.",
    fullDesc:
      "A command-center style dashboard that tracks deployments, rollout status, and infrastructure signals with a dense but readable UI.",
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
    slug: "fintech-ops",
    title: "Fintech Ops Console",
    shortDesc: "Ops workflows for transaction reviews, alerts, and support escalation.",
    fullDesc:
      "A secure operations workspace built for support teams to prioritize issues, monitor alerts, and inspect transaction flows.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    status: "completed",
    featured: true,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2025,
    category: "dashboard",
  },
  {
    id: 3,
    slug: "ai-notes",
    title: "AI Notes Workspace",
    shortDesc: "Fast note capture with semantic search and compact knowledge cards.",
    fullDesc:
      "A writer-focused workspace combining lightweight note taking, semantic retrieval, and a clean content hierarchy.",
    tags: ["Next.js", "OpenAI", "Prisma", "Supabase"],
    status: "in-progress",
    featured: false,
    github: "https://github.com/",
    live: "https://example.com/",
    year: 2024,
    category: "ai",
  },
  {
    id: 4,
    slug: "commerce-portal",
    title: "Commerce Admin Portal",
    shortDesc: "Inventory, orders, and fulfillment monitoring in one operator view.",
    fullDesc:
      "A retailer-facing platform designed for staff to manage stock, order queues, and fulfillment priorities without switching tools.",
    tags: ["TypeScript", "Tailwind", "Stripe", "PostgreSQL"],
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
    title: "MCA — Masters in Computer Applications",
    subtitle: "DDU Nadiad, Gujarat · Full-Stack & Cloud focus",
  },
  {
    year: "2023",
    title: "Built production-style dashboards",
    subtitle: "Worked on operator tooling, analytics views, and deploy observability.",
  },
  {
    year: "2022",
    title: "Frontend systems and UI engineering",
    subtitle: "Expanded into reusable component systems and motion-first interfaces.",
  },
  {
    year: "2021",
    title: "Started shipping with JavaScript",
    subtitle: "Focused on fundamentals, problem solving, and clean implementation habits.",
  },
];

export const blog: BlogPost[] = [
  {
    slug: "first-mern-app",
    title: "What I Learned Building My First MERN App",
    excerpt: "The jump from tutorials to a deployed product changes how you think about architecture and feedback loops.",
    tags: ["MERN", "React"],
    date: "Jan 2025",
    readTime: "6 min read",
  },
  {
    slug: "ui-motion-not-overkill",
    title: "Why Motion Should Clarify, Not Decorate",
    excerpt: "Small, well-timed transitions can make dense interfaces feel obvious instead of noisy.",
    tags: ["Motion", "UX"],
    date: "Feb 2025",
    readTime: "4 min read",
  },
  {
    slug: "building-for-speed",
    title: "A Practical Approach to Fast Frontends",
    excerpt: "A fast UI is mostly a product of disciplined boundaries, not clever tricks.",
    tags: ["Performance", "Next.js"],
    date: "Mar 2025",
    readTime: "5 min read",
  },
  {
    slug: "from-api-to-dashboard",
    title: "Designing APIs for Dashboards",
    excerpt: "Good dashboards start with data that is already structured around user decisions.",
    tags: ["APIs", "Data"],
    date: "Apr 2025",
    readTime: "7 min read",
  },
];