var gulp = require('gulp'),
  compass = require('gulp-compass');

gulp.task('compass', function() {
  return gulp.src('./src/pink-flower-bayan-original-nojs.scss')
    .pipe(compass({
      sass: 'src',
      image: 'src/img',
      css: 'dist',
      sourcemap: true,
    }));
});

gulp.task('default', function() {
  gulp.watch('src/css/**/*.scss', gulp.series('compass'));
});
