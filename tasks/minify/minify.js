var gulp  = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');


gulp.task('minify-html', () => {
  return gulp.src('./build/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('minify-css', () => {
  return gulp.src('./build/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('minify-js', () => {
  gulp.src('./build/js/app-frontend.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
});



gulp.task('compress',['minify-html', 'minify-css', 'minify-js'], function () {
  console.log('compress files');
});
