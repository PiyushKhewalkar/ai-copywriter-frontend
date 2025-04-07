/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // or whatever your file structure is
  ],
  plugins: [require("@tailwindcss/line-clamp")],
};