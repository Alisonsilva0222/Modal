/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "blue-fit": "#004480"
      },
      fontFamily:{
        'sans': ['Poppins'],
      },
    },
  },
  plugins: [],
}