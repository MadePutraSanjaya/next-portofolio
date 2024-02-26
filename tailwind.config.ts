import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      bgColor: "#101D30",
      bgInfo: { 100: "#1B2B43", 200: "#4DB5FF" },
      bgTransparent: "transparent",
      bgSection: "#1B2B43",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
