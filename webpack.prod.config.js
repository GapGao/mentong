/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var paths = {
  src: {
    main: path.join(__dirname, 'src/main-app'),
  },
  dest: path.join(__dirname, 'src/server/public/javascripts/'),
};

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.join(paths.src.main, '/index.js')],
  },
  output: {
    path: paths.dest,
    publicPath: '/javascripts/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['@babel/preset-env'],  
        },
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|otf)/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    // short-circuits all Vue.js warning code
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    // extract css into its own file
    new ExtractTextPlugin('../stylesheets/[name].css'),
    new VueLoaderPlugin(),
    // optimize module ids by occurence count
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
}
