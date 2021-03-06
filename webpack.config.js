const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/js/index.js',
  output: {
    path: __dirname,
    filename: 'www/js/bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel',
    },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './www/',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    }),
    new ExtractTextPlugin('www/css/style.css', {
      allChunks: true,
    }),
  ],
  node: {
      net: 'empty',
      dns: 'empty'
  }
};

module.exports = config;
