/* eslint-disable */
var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var spawn = require('child_process').spawn;
var path = require('path');
var babel = require('gulp-babel');
var del = require('del');
var runSequence = require('run-sequence');

var PATH = {
  SRC: path.join(__dirname, './src'),
  DIST: path.join(__dirname, './dist'),
};

gulp.task('build:clean', function() {
  return del(PATH.DIST);
});

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

gulp.task('build:client:compile', function(callback) {
  webpack(require('./webpack.prod.config'), function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({ colors: true }))
    callback()
  })
});

gulp.task('build:client:copy', function() {
  return gulp.src(path.join(PATH.SRC, './server/public/**/*'))
  .pipe(gulp.dest(path.join(PATH.DIST, './public')));
});

gulp.task('build:clean', function() {
  return del(PATH.DIST);
});

gulp.task('build:client:del', function() {
  return del([
    path.join(PATH.SRC, './server/public/javascripts/main.js'),
  ]);
});

gulp.task('build:client', function(callback) {
  runSequence(
    'build:client:compile',
    'build:client:copy',
    'build:client:del',
    callback
  );
});

gulp.task('build:server', function() {
  return gulp.src([
    path.join(PATH.SRC, './server/**/*.js'),
    '!' + path.join(PATH.SRC, './server/public/**/*'),
  ])
  .pipe(babel())
  .pipe(gulp.dest(PATH.DIST));
});

gulp.task('build:copy-package', function() {
  return gulp.src(path.join(__dirname, './package.json'))
  .pipe(gulp.dest(PATH.DIST));
});

gulp.task('build:copy-views', function() {
  return gulp.src(path.join(PATH.SRC, './server/views/**/*'))
  .pipe(gulp.dest(path.join(PATH.DIST, './views')));
});

// gulp.task('build:new', function(callback) {
//   runSequence(
//     'build:clean',
//     ['build:client', 'build:server'],
//     ['build:copy-package', 'build:copy-views'],
//     callback
//   );
// });

gulp.task('build', function(callback) {
  webpack(require('./webpack.prod.config'), function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({ colors: true }))
    callback()
  })
});
