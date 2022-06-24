/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      title: ['Fraunces', 'serif']
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
