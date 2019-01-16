var gulp = require('gulp');
var sftp = require('gulp-sftp');
var config = require('./../../config.json');


gulp.task('deploy',function(){
  console.log('deploy files super fast!');
  return gulp.src('./build/**/*.*')
      .pipe(sftp({
          host: config.sftp.host,
          user: config.sftp.user,
          port: config.sftp.port,
          pass: config.sftp.pass,
          remotePath: config.sftp.remotePath,
      }));

});
