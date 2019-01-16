var gulp  = require('gulp');
var htmlbeautify = require('gulp-html-beautify');
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');

gulp.task('beautify-html', function() {
  var options = {
    indentSize: 2,
    indent_char: " ",
    eol: "\n",
  };
  gulp.src('./build/*.html')
  .pipe(htmlbeautify(options))
  .pipe(gulp.dest('./build/'))
});

gulp.task('beautify-css', function() {
    return gulp.src('./build/css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('beautify-js', function() {
  gulp.src('./build/js/*.js')
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('./build/js/'))
});



gulp.task('uncompress',['beautify-html', 'beautify-css','beautify-js'], function () {
  console.log('compress files');
});
