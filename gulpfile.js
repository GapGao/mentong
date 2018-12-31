/* eslint-disable */
var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var spawn = require('child_process').spawn;

gulp.task('server', function() {
  nodemon({
    script: 'index.js',
    ext: 'js',
    watch: ['server/'],
    ignore: ['server/public/*'],
    delay: 500,
  })
  .on('restart', function() {
    console.log('nodemon server restarted!');
  });
});

gulp.task('dev-server', function() {
  var node = spawn('node', ['--max_old_space_size=4096', './devServer.js']);
  node.stdout.on('data', function(data) {
    console.log('' + data);
  });
  node.stderr.on('data', function(data) {
    console.error('' + data);
  });
});

gulp.task('start', ['dev-server', 'server']);
