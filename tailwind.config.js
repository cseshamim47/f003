/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./test.html", "./assets/js/**/*.js", "./components/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        green: "#0E6F00"
      }
    },
  },
  plugins: [],
};
