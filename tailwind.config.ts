import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-dark': '#121481',
        'primary-light': '#FFEAE3',
        'primary-pink': '#FFCBCB',
        'light-lavender': '#E1D8FF',
        'pastel-blue': '#A7C7E7',
        'soft-lilac': '#DCCEFF'
      }
    },
  },
  plugins: [],
};
export default config;
