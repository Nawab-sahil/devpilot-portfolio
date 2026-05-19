"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-dp-border-primary bg-dp-bg px-7"
    >
      <Link href="/" className="font-mono text-sm font-bold text-dp-orange">
        &lt;<span className="text-dp-text-dark"> Sahil</span> /&gt;
      </Link>

      <nav className="hidden items-center gap-5 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "text-sm text-dp-lime" : "text-sm text-dp-text-dark transition-colors hover:text-dp-text-primary"}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="rounded-md bg-dp-orange px-[14px] py-1.5 text-xs font-bold text-black transition-opacity hover:opacity-85"
      >
        Hire Me
      </Link>
    </motion.header>
  );
}