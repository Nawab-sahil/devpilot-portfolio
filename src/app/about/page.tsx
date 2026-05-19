import SectionHeader from "@/components/common/SectionHeader";
import Timeline from "@/components/common/Timeline";
import { timeline } from "@/data/portfolio";

export const metadata = {
  title: 'About — Sahil — Full-Stack Developer',
  description: 'About Sahil — MCA student at DDU Nadiad. Full-stack developer with a focus on Next.js and Cloud.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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

        <Timeline entries={timeline} className="gap-0" />
      </div>
    </div>
  );
}