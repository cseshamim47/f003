/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./test.html",
    "./assets/js/**/*.js",
    "./components/**/*.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        xl: "1280px", // Make 1280px the maximum breakpoint
        "2xl": "1280px", // Ensure larger breakpoints also stay capped at 1280px
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        customGreen: "#0E6F00",
        primary: "#0E6F00",
        secondary: "#063000",
        bodyText: "#18181B",
        star: "#FDB241",
      },
    },
  },
  plugins: [],
};
