import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        follio: {
        teal: "#3EF2A9",     // mint green from logo
        blue: "#34D0F2",     // bright sky blue
        purple: "#A259FF",   // light purple
        navy: "#0B0C3F",     // dark text
        },
    },
    backgroundImage: {
        "follio-gradient": "linear-gradient(to right, #34D0F2, #3EF2A9)",
        },
    },
  },
  plugins: [],
};

export default config;
