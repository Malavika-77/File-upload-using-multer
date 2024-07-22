// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your project's file types
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Define the Playfair Display font here
      },
    },
  },
  plugins: [],
};
