/** @type {import('tailwindcss').Config} */
import {
  scrollbarColor,
  scrollbarGutter,
  scrollbarWidth,
} from "tailwind-scrollbar-utilities";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", "sans-serif"],
      },
      colors: {
        primary: "#B7AFA3",
        secondary: "#79756d",
        accent: "#dad7d2",
        content: {
          checked: "#383532",
          DEFAULT: "#43403C",
        },
      },
    },
  },
  plugins: [scrollbarColor(), scrollbarGutter(), scrollbarWidth()],
};
