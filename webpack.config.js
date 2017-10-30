const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/main.js',
    vendor: [
      'jquery'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: 2
    }),
    new UglifyJSPlugin()
  ]
};