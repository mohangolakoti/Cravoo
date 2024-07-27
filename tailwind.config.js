/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lilita:["Lilita One", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        OpenSans:["Open Sans", "sans-serif"]
      },
      colors: {
        'r-btn': '#F28F3B',
        'r-dbtn': '#C8553D',
        'r-logo': '#588B8B',
        'r-nrml':'#FFD5C2'
      }
    },
  },
  plugins: [],
}