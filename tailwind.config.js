/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./test.html",
    "./assets/js/**/*.js",
    "./components/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        customGreen: "#0E6F00",
      },
    },
  },
  plugins: [],
};
