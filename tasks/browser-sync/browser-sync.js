var gulp  = require('gulp');
var browserSync = require('browser-sync').create();



gulp.task('taskSync', function() {
    browserSync.init({
        server: {
           baseDir: "./build"
         },
         notify: false
    });
    gulp.watch('./src/scss/*.scss', ['generateCss']).on('change', browserSync.reload);
    gulp.watch('./build/js/*.js').on('change', browserSync.reload);
    gulp.watch("build/*.html").on('change', browserSync.reload);
});
