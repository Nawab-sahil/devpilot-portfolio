import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-dp-border-primary bg-dp-bg-2/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.24em] text-dp-text-primary">DEVPILOT</div>
          <p className="mt-2 max-w-md text-sm text-dp-text-secondary">
            Production-grade developer portfolio built with Next.js, motion, and a sharp orange-lime visual language.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-dp-text-secondary transition hover:text-dp-lime">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}