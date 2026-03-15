import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Impact", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        navy: { DEFAULT: "#0a1628", light: "#0f2044", mid: "#1a3a6b" },
        grit: { red: "#DA1D3A" },
      }
    },
  },
  plugins: [],
};
export default config;
