/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F2F5DE',
        secondary: "#0D0C1D",
        highlight: "#2C5530",
        accent: "#06BA63"
      }
    },
  },
  plugins: [],
}

