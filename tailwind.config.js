/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'airdrop-bg': "url('./src/assets/conference/Rectangle_279.png')"
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [require("daisyui")],
}