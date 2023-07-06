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
        'airdrop-bg': "url('./src/assets/conference/Rectangle_279.png')",
        'airdrop-icon': "url('./src/assets/conference/img-bg-airdrop.png')",
        'money-gun': "url('./src/assets/conference/img-bg-moneygun.png')"
      },
      backgroundSize: {
        '99%': '99%',
        '90%': '90%',
        '80%': '80%',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%'
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [require("daisyui")],
}