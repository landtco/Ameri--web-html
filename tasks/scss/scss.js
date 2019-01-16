var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync').create();



gulp.task('generateCss', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cssmin())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});
