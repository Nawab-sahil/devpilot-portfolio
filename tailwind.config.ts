import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dp: {
          orange: "#FF5C00",
          "orange-dark": "#CC4800",
          lime: "#C8FF00",
          "lime-dark": "#A0CC00",
          teal: "#00E5C8",
          amber: "#FFB800",
          rose: "#FF3D6B",
          bg: "#060604",
          "bg-2": "#0e0d0a",
          "bg-3": "#161410",
          text: {
            primary: "#F2EDE4",
            secondary: "#8A8070",
            dark: "#4A4438",
          },
          border: {
            primary: "#252118",
            secondary: "#332E22",
          },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 92, 0, 0.18)",
        lime: "0 0 24px rgba(200, 255, 0, 0.16)",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;