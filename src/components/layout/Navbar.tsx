'use client';

import { useScrolled } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const isScrolled = useScrolled();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              D
            </div>
            <span className="text-lg font-bold text-white hidden sm:inline">
              DevPortfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Theme toggle and Resume CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex px-4 py-2 text-sm">
              <Link href="/resume">Resume</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-colors duration-200"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900/50 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="block w-full mt-4">
                <Link href="/resume" onClick={() => setIsMobileOpen(false)}>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
