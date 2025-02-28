<<<<<<< HEAD
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        triangle: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-path-triangle': {
          'clip-path': 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)',
        },
      });
    },
  ],
};
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> 89915c71c6126b3b7496afc0f71ce9af3915c80e
