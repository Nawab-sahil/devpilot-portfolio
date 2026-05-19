import Link from "next/link";
import { Mail, MapPin, MessageSquareText, Send, Smartphone } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeader from "@/components/common/SectionHeader";
import Terminal from "@/components/sections/Terminal";
import SkillGroup from "@/components/skills/SkillGroup";
import Timeline from "@/components/common/Timeline";
import { projects, skills, timeline } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="pb-20">
      <div id="home" className="scroll-mt-[72px]">
        <Hero />
      </div>

      <section id="projects" className="mx-auto scroll-mt-[72px] max-w-7xl border-t border-dp-border-primary px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="font-mono text-[11px] tracking-[0.36em] text-dp-orange">// PROJECTS</div>
            <div className="h-px w-full min-w-[180px] bg-dp-border-primary" />
          </div>
          <div className="font-mono text-[11px] tracking-[0.24em] text-dp-text-secondary">06 total</div>
        </div>
        <ProjectGrid featuredOnly />
      </section>

      <section id="terminal" className="mx-auto scroll-mt-[72px] max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader label="TERMINAL" title="Live build notes" count="01" />
        <Terminal />
      </section>

      <section id="about" className="mx-auto scroll-mt-[72px] max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeader label="ABOUT" title="A builder who likes sharp systems" count="01 / 04" />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="dp-panel rounded-[32px] p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-[28px] border border-dp-border-secondary bg-gradient-to-br from-dp-orange via-dp-orange-dark to-dp-lime text-3xl font-bold text-black shadow-glow">
                DP
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.34em] text-dp-lime">PROFILE CARD</div>
                <h2 className="mt-3 text-3xl font-semibold text-dp-text-primary">DevPilot</h2>
                <p className="mt-2 max-w-sm text-sm leading-7 text-dp-text-secondary">
                  Developer focused on full-stack interfaces, dashboards, and premium motion systems that make products feel intentional.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Location", "Gujarat, India"],
                ["Focus", "Next.js / Cloud"],
                ["Stack", "TypeScript / React"],
                ["Mode", "Shipping"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3">
                  <div className="font-mono text-[10px] tracking-[0.28em] text-dp-text-secondary">{label}</div>
                  <div className="mt-2 text-dp-text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {timeline.map((entry) => (
              <Timeline key={entry.year} entries={[entry]} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto scroll-mt-[72px] max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeader label="SKILLS" title="2x2 capability map" count="04 GROUPS" />
        <SkillGroup categories={skills} />
      </section>

      <section id="resume" className="mx-auto scroll-mt-[72px] max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeader label="RESUME" title="Experience timeline and highlights" count="PDF READY" />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <Timeline entries={timeline} />

          <aside className="dp-panel rounded-[32px] p-6">
            <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">DOWNLOAD</div>
            <h2 className="mt-3 text-3xl font-semibold text-dp-text-primary">One-page resume</h2>
            <p className="mt-4 text-sm leading-7 text-dp-text-secondary">
              Clean summary of full-stack experience, UI systems, and project delivery work.
            </p>
            <Link
              href="/resume.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-dp-orange px-5 py-3 text-sm font-medium text-black transition hover:bg-dp-orange-dark"
            >
              Download Resume
            </Link>
            <div className="mt-8 rounded-3xl border border-dp-border-secondary bg-dp-bg-3 p-5 text-sm text-dp-text-secondary">
              Tip: place a real resume file at <span className="font-mono text-dp-lime">public/resume.pdf</span> to make the button live.
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="mx-auto scroll-mt-[72px] max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeader label="CONTACT" title="Start a project conversation" count="LET'S TALK" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form className="dp-panel rounded-[32px] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-dp-text-secondary">Name</span>
                <input className="w-full rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-dp-text-secondary">Email</span>
                <input className="w-full rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-sm text-dp-text-secondary">Project details</span>
              <textarea className="min-h-44 w-full rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="Tell me about the product, scope, and timeline." />
            </label>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-dp-lime px-5 py-3 text-sm font-medium text-black transition hover:bg-white">
              Send Message <Send size={16} />
            </button>
          </form>

          <aside className="dp-panel rounded-[32px] p-6">
            <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">INFO</div>
            <h2 className="mt-3 text-3xl font-semibold text-dp-text-primary">Fast response channels</h2>
            <div className="mt-6 space-y-4 text-sm text-dp-text-secondary">
              <div className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3"><Mail size={16} className="text-dp-lime" /> hello@devpilot.dev</div>
              <div className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3"><Smartphone size={16} className="text-dp-teal" /> +91 00000 00000</div>
              <div className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3"><MapPin size={16} className="text-dp-amber" /> Gujarat, India</div>
              <div className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3"><MessageSquareText size={16} className="text-dp-rose" /> Available for freelance and product work</div>
            </div>
            <Link href="mailto:hello@devpilot.dev" className="mt-8 inline-flex items-center gap-2 rounded-full border border-dp-border-secondary px-5 py-3 text-sm font-medium text-dp-text-primary transition hover:border-dp-lime hover:text-dp-lime">
              hello@devpilot.dev
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
