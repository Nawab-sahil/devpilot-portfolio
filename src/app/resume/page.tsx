import Link from "next/link";
import { Download } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Timeline from "@/components/common/Timeline";
import { timeline } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="RESUME" title="Experience timeline and highlights" count="PDF READY" />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <Timeline entries={timeline} className="gap-0" />

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
            <Download size={16} /> Download Resume
          </Link>
          <div className="mt-8 rounded-3xl border border-dp-border-secondary bg-dp-bg-3 p-5 text-sm text-dp-text-secondary">
            Tip: place a real resume file at <span className="font-mono text-dp-lime">public/resume.pdf</span> to make the button live.
          </div>
        </aside>
      </div>
    </div>
  );
}