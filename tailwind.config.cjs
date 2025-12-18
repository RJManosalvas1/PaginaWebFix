/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo", "sans-serif"],
      },
      fontSize: {
        base: "20px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
      },
      colors: {
        customBlack: "#0c0a09",
        customOrange: "#ea580c",
        customBlue: "#0c4a6e",
      },
    },
  },

  plugins: [],
};
