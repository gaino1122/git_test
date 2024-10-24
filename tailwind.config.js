/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scans all HTML files in the root directory
    "./html-boilerplate/**/*.html", // Scans all HTML files in the 'html-boilerplate' folder
    "./**/*.js", // Optionally, include any JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
