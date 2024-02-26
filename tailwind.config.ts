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
        primary: "#4DB5FF",
        bgColor: "#101D30",
        bgInfo: "#1B2B43",
        bgTransparent: "transparent",
        bgSection: "#1B2B43",
        bgBorder: "#4DB5FF",
      },
      spacing: {
        section: "padding: 80px 0",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
      },
    },
  },
  plugins: [],
};
export default config;
