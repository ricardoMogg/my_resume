'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('commons.scripts', ['commons.partials'], function () {

  return gulp.src(
    path.join(conf.paths.commons_src, '/**/*.js'))
    .pipe(gulp.dest(conf.paths.commons));
});

gulp.task('commons.styles', function () {
  return gulp.src(
    path.join(conf.paths.commons_src, '/**/*.scss'))
    .pipe(gulp.dest(conf.paths.commons));
});

gulp.task('commons.templates', function () {
  return gulp.src(
    path.join(conf.paths.commons_src, '/**/*.html'))
    .pipe(gulp.dest(conf.paths.commons));
});

gulp.task('commons.partials', ['commons.templates'], function () {
  return gulp.src(path.join(conf.paths.commons, '/**/*.html'))
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('commonsTemplateCacheHtml.js', {
      module: 'hhCommons',
      root: 'commons'
    }))
    .pipe(gulp.dest(conf.paths.commons));
});


gulp.task('commons', ['commons.scripts', 'commons.styles']);
