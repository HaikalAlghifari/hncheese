// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        badscript: ['"Bad Script"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        playfair: ['"Playfair"', 'serif'],
      }
    },
  },
  plugins: [],
}
