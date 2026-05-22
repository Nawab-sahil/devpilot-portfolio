import Link from "next/link";
import { Download, BriefcaseBusiness, GraduationCap, MapPin, Github, Linkedin, Code } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Timeline from "@/components/common/Timeline";
import { timeline, profile, education, projects, skills } from "@/data/portfolio";

export const metadata = {
  title: 'Resume | Nawab Sahil | Software Engineer and DevOps-Oriented Builder',
  description: 'Resume of Nawab Sahil, MCA candidate at Dharmsinh Desai University with full-stack development experience in Next.js, TypeScript, PHP, Java, Docker, CI/CD, and technical SEO.',
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader label="RESUME" title="Experience timeline and highlights" count="PDF READY" />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="space-y-8">
          <div className="dp-panel rounded-[32px] p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-[28px] border border-dp-border-secondary bg-gradient-to-br from-dp-orange via-dp-orange-dark to-dp-lime text-3xl font-bold text-black shadow-glow">
                NS
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.34em] text-dp-lime">PROFILE SNAPSHOT</div>
                <h2 className="mt-3 text-3xl font-semibold text-dp-text-primary">{profile.name}</h2>
                <p className="mt-2 max-w-md text-sm leading-7 text-dp-text-secondary">{profile.subheadline}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-dp-text-secondary">{profile.summary}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary"><MapPin size={16} className="mr-2 inline-block text-dp-amber" />{profile.location}</div>
              <div className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary"><BriefcaseBusiness size={16} className="mr-2 inline-block text-dp-teal" /> Full-stack product delivery</div>
              <div className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary"><Github size={16} className="mr-2 inline-block text-dp-lime" /> CI/CD and deployment workflow focus</div>
              <div className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary"><Linkedin size={16} className="mr-2 inline-block text-dp-teal" /> Open to connect</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.year} className="dp-panel rounded-[24px] p-6">
                <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">EDUCATION</div>
                <h3 className="mt-3 text-xl font-semibold text-dp-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-dp-orange">{item.year}</p>
                <p className="mt-3 text-sm leading-7 text-dp-text-secondary">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="dp-panel rounded-[32px] p-6">
            <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">SKILLS</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category} className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 p-4">
                  <h3 className="font-semibold text-dp-text-primary">{group.category}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-dp-text-secondary">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between gap-4">
                        <span>{item.name}</span>
                        <span className="font-mono text-dp-lime">{item.level}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="dp-panel rounded-[32px] p-6">
            <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">SELECTED WORK</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {projects.filter((project) => project.featured).slice(0, 4).map((project) => (
                <div key={project.id} className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 p-4">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-dp-orange">{project.year}</div>
                  <h3 className="mt-2 text-lg font-semibold text-dp-text-primary">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dp-text-secondary">{project.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          <Timeline entries={timeline} />
        </div>

        <aside className="dp-panel rounded-[32px] p-6">
          <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">DOWNLOAD</div>
          <h2 className="mt-3 text-3xl font-semibold text-dp-text-primary">One-page resume</h2>
          <p className="mt-4 text-sm leading-7 text-dp-text-secondary">
            Concise profile of engineering work across Next.js, TypeScript, PHP, Java, Docker, CI/CD, and production-oriented delivery.
          </p>
          <Link
            href="/resume.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-dp-orange px-5 py-3 text-sm font-medium text-black transition hover:bg-dp-orange-dark"
          >
            <Download size={16} /> Download Resume
          </Link>

        </aside>
      </div>
    </div>
  );
}
