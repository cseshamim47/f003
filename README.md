npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch


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


background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);


----- 

background: hsla(0, 100%, 63%, 1);

background: linear-gradient(90deg, hsla(0, 100%, 63%, 1) 0%, hsla(274, 100%, 63%, 1) 24%, hsla(216, 100%, 63%, 1) 51%, hsla(194, 100%, 63%, 1) 79%, hsla(97, 100%, 63%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(0, 100%, 63%, 1) 0%, hsla(274, 100%, 63%, 1) 24%, hsla(216, 100%, 63%, 1) 51%, hsla(194, 100%, 63%, 1) 79%, hsla(97, 100%, 63%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(0, 100%, 63%, 1) 0%, hsla(274, 100%, 63%, 1) 24%, hsla(216, 100%, 63%, 1) 51%, hsla(194, 100%, 63%, 1) 79%, hsla(97, 100%, 63%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF4444", endColorstr="#AD44FF", GradientType=1 );