import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Ключова настройка!
  theme: {
    extend: {
      fontFamily: {
        default: ["Actor", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
