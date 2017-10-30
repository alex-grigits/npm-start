module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({}),
    require('postcss-url')({}),
    require('postcss-cssnext')({}),
    require('postcss-font-magician')({}),
    require('cssnano')({'autoprefixer': false})
  ]
 });
