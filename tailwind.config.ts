import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#e23b2a",
        ink: "#0d0d0f",
        bg: "#0a0a0b",
        card: "#121215"
      },
      boxShadow: {
        brand: "0 10px 30px -12px rgba(226,59,42,.55)"
      }
    },
  },
  plugins: [],
};
export default config;
