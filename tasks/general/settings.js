var gulp  = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch' , ['generateCss','taskSync'] , function () {
  console.log('Generate, Browser Sync and Symbols');
});
