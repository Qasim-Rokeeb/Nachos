/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#8F0000",
        brandBlue: "#125795",
      },
      fontFamily :{
        prosto: ["Prosto One", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

