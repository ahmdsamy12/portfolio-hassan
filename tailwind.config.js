/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url(./src/images/Vector 2.png)",
        aboutBG: "url(./src/images/Vector-Cuadros.png)",
      },
    },
  },
  plugins: [],
};
