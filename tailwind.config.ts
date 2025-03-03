import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "500px" },
      md: { max: "720px" },
      lg: { max: "1024px" },
      xl: { max: "1300px" },
    },
    extend: {
      colors: {
        light: "#FCFCFC",
        bglight: "#EAEAEA",
        dark: "#282828",
        darker: "#181818",
        middark: "#212121",
        lightdark: "#444746",
        success: "#198754",
        danger: "#dc3545",
        prime: "#0d6efd",
        money: "#28B530",
        accent: "#6ee154",
        boldGreen: "#003027",
        boldblue: "#01475f",
        acgreen: "#2a9245",
        acyellow: "#a0ce3f",
        aclight: "#cae58e",
      },
      textIndent: {},
    },
  },
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
};
export default config;
