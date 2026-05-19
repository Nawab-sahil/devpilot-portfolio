import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dp: {
          orange: '#FF5C00',
          'orange-dark': '#CC4800',
          'orange-light': 'rgba(255,92,0,0.12)',
          lime: '#C8FF00',
          'lime-dark': '#A0CC00',
          'lime-light': 'rgba(200,255,0,0.1)',
          teal: '#00E5C8',
          amber: '#FFB800',
          rose: '#FF3D6B',
          bg: '#060604',
          'bg-2': '#0e0d0a',
          'bg-3': '#161410',
          'bg-4': '#1e1b14',
          text: {
            primary: '#F2EDE4',
            secondary: '#8A8070',
            dark: '#4A4438',
          },
          border: {
            primary: '#252118',
            secondary: '#332E22',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config;