var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('./../../config.json');

gulp.task('zip-it',function(){
  console.log('zip it was called')
  gulp.src(['./build/*', '!./build/zip/'])
  .pipe(zip(config.zipname))
  .pipe(gulp.dest('build/zip'))
});
