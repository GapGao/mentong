/* eslint-disable */
var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');

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

gulp.task('start', ['server']);
