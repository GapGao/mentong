/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var paths = {
  src: {
    main: path.join(__dirname, 'src/main-app'),
  },
  dest: path.join(__dirname, 'src/server/public/javascripts/'),
};

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    login: ['babel-polyfill', 'webpack-hot-middleware/client', path.join(paths.src.main, '/login.js')],
    main: ['babel-polyfill', 'webpack-hot-middleware/client', path.join(paths.src.main, '/index.js')],
  },
  output: {
    path: paths.dest,
    filename: '[name].js',
    publicPath: '/javascripts/',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue'],
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
          presets: ['es2015', 'stage-3'],  
        }
      } ,
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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('../stylesheets/[name].css'),
    new webpack.DefinePlugin({
      __DEVTOOLS__: true,
      __PORT__: 3001,
    }),
    new VueLoaderPlugin(),
  ],
};
