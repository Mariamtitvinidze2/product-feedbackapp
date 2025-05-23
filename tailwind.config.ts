import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgmain : 'var(--bgMain)',
        indigoink : '#373F68',
        vibrantpurple : '#AD1FEA'
      },
      fontFamily: {
        jost: ['var(--font-jost)'],
      }
    },
  },
  plugins: [],
};
export default config;
