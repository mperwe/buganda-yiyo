// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',  // Blue color (if needed)
        'custom-white': '#FFFFFF', // White color (if needed)
        'custom-brown': '#8B4513', // Your custom brown color
      },
    },
  },
  plugins: [],
}
