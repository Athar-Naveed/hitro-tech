import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA0D12",
        secondary: "#F52C70",
        tertiary: "#FD9E2B",
        primary_effect: "#EAF1FE",
        secondary_effect: "#DEF3F8",
        tertiary_effect: "#F1E2F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
