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
