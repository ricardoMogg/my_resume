'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts',['commons.scripts'], function () {
  return gulp.src([
    path.join(conf.paths.commons, '/**/*.js'),
    path.join('!'+conf.paths.commons, '/**/*CacheHtml.js'),
    path.join(conf.paths.src, '/app/**/*.js')])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jscs())
    .pipe($.jscs.reporter())
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
