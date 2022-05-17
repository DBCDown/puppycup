const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      backgroundImage: {
        addImage: 'url(/blob-scene-haikei.svg)',
      },
    },
  },
  plugins: [],
}
