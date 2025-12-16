import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1020", // midnight blue
        gold: "#f5c542",     // gold
      },
      // ADD THIS SECTION:
      fontFamily: {
        // This sets the default font (font-sans) to Inter
        sans: ['var(--font-inter)'], 
        // Add elegant font
        'dancing-script': ['var(--font-dancing-script)'], 
      },
    },
  },
  plugins: [],
};

export default config;