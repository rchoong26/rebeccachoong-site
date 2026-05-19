import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06111F",
          900: "#071827",
          850: "#0A1B2E",
          800: "#10243A"
        },
        champagne: "#D8B96A",
        ivory: "#F7F1E4"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(216,185,106,0.14)",
        panel: "0 24px 80px rgba(0,0,0,0.32)"
      }
    }
  },
  plugins: []
};

export default config;
