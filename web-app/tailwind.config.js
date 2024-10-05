module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Ensure this points to your React files
    ],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],  // Add DaisyUI as a plugin
  }
