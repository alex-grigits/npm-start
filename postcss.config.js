module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {},
    'cssnano': {
      'autoprefixer': false
    }
  }
});