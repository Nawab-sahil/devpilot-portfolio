import type { Config } from 'tailwindcss'
import { colors } from './src/lib/colors'

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
          orange: colors.orange,
          'orange-dark': colors.orangeDark,
          'orange-light': colors.orangeLight,
          lime: colors.lime,
          'lime-dark': colors.limeDark,
          'lime-light': colors.limeLight,
          teal: colors.teal,
          amber: colors.amber,
          rose: colors.rose,
          bg: colors.bg,
          'bg-2': colors.bg2,
          'bg-3': colors.bg3,
          'bg-4': colors.bg4,
          text: {
            primary: colors.t1,
            secondary: colors.t2,
            dark: colors.t3,
          },
          border: {
            primary: colors.bdr,
            secondary: colors.bdr2,
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(255, 92, 0, 0.32), 0 0 48px rgba(255, 92, 0, 0.12)',
        lime: '0 0 24px rgba(200, 255, 0, 0.28), 0 0 48px rgba(200, 255, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config;