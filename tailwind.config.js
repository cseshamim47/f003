/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js", "./components/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
