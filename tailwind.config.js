module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    '**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lilita': 'Lilita One',
        'poppins': 'Poppins',
        'opensans': 'Open Sans'
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      tableLayout: ['hover', 'focus'],
      borderCollapse: ['hover', 'focus']
    },
  },
  plugins: [],
}
