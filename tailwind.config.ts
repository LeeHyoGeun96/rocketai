import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["text-bubble"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        bubble: "clamp(0.1rem, 4.46cqi, 1.25rem)", // 14px~20px 기준
        // "test-size": "2rem",
      },
    },
  },
  plugins: [containerQueries],
} satisfies Config;
