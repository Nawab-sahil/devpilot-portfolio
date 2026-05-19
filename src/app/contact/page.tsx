import Link from "next/link";
import { Mail, MapPin, MessageSquareText, Send, Smartphone } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
    </div>
  );
}