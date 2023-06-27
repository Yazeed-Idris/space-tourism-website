/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'Dark': 'hsl(230, 35%, 7%)',
        'Grey': 'hsl(231, 77%, 90%)',
        'Plain': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}

