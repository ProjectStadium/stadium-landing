import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        geist: ["var(--font-geist-mono)"],
        planar: ["var(--font-gt-planar)"],
        "planar-15": ["var(--font-gt-planar-italic-15)"],
        "planar-30": ["var(--font-gt-planar-italic-30)"],
        "planar-45": ["var(--font-gt-planar-italic-45)"],
        "planar-re-15": ["var(--font-gt-planar-retalic-15)"],
        "planar-re-30": ["var(--font-gt-planar-retalic-30)"],
        "planar-re-45": ["var(--font-gt-planar-retalic-45)"],
      },
    },
  },
  plugins: [],
};
export default config;
