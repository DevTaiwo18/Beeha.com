module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        brandBrown: '#6e260e',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
