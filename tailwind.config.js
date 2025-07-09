/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:"class",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease-out both',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};


