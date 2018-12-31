/* eslint-disable */
var express = require('express');
var webpack = require('webpack');
var httpProxy = require('http-proxy');
var config = require('./webpack.dev.config.js');

var app = express();

var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
});

var compiler;
compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  // display no info to console (only warnings and errors)
  publicPath: config.output.publicPath,
  stats: 'error-only',
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(/\/stylesheets/, function (req, res, next) {
  res.end(); // we use style-loader in dev mode, no need to proxy /stylesheets/*
});

proxy.on('error', function(err) {
  if (err.message.indexOf('socket hang up') >= 0) {
    console.error(err);
  } else if (err.message.includes('connect ECONNREFUSED')) {
    console.error(err);
  } else {
    console.error(err);
    throw err;
  }
});

app.use(function(req, res) {
  proxy.web(req, res);
});

var port = parseInt(process.env.MAGE_DEV_PORT) || 3000;

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening to both your IP and http://localhost:' + port + '…');
});
