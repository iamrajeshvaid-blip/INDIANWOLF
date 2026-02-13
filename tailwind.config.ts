import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        foreground: "#ffffff",
        brand: {
          cyan: "#00f3ff",
          silver: "#c0c0c0",
          gold: "#fbbf24",
          purple: "#8b5cf6",
          emerald: "#10b981",
          rose: "#ec4899",
        },
      },
      backgroundImage: {
        "wolf-glow": "radial-gradient(circle at center, rgba(0, 243, 255, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
