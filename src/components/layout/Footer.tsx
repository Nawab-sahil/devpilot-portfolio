import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const links: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/Nawab-sahil/", icon: <Github size={14} className="inline-block align-text-bottom mr-1" /> },
  { label: "LeetCode", href: "https://leetcode.com/u/nawabsahil/", icon: null },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-nawab", icon: <Linkedin size={14} className="inline-block align-text-bottom mr-1" /> },
  { label: "Resume", href: "/resume", icon: null },
];

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-[color:var(--border)] bg-[color:var(--bg2)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-7 md:flex-row md:items-center md:justify-between">
        <Link href="/#home" className="font-mono text-[13px] text-dp-cyan transition hover:text-dp-t1">
          <span className="text-dp-t3">&lt;</span> Sahil <span className="text-dp-t3">/&gt;</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-[12px]">
          {links.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="text-dp-t3 transition hover:text-dp-t1 flex items-center gap-1"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <div className="text-[12px] text-dp-t3">Built with Next.js · Framer Motion · 2026</div>
      </div>
    </footer>
  );
}