'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const currentTheme = theme === 'light' ? 'light' : 'dark';

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-colors duration-200 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {currentTheme === 'dark' ? (
          <Sun
            className="w-5 h-5 text-yellow-400 transition-all duration-300"
            style={{
              transform: isHovered ? 'rotate(20deg)' : 'rotate(0deg)',
            }}
          />
        ) : (
          <Moon
            className="w-5 h-5 text-blue-400 transition-all duration-300"
            style={{
              transform: isHovered ? 'rotate(-20deg)' : 'rotate(0deg)',
            }}
          />
        )}
      </div>
    </button>
  );
}
