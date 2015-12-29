var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var exec = require('child_process').execSync;

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true,
    port: 3000
  });
});

gulp.task('sass', () => {
  gulp.src('src/styles/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('bin/static/css'))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('copyImages', () => {
  gulp.src(['src/assets/images/**/*'])
    .pipe(gulp.dest('bin/static/img'))
    .pipe(connect.reload());
});

gulp.task('copyFontsAndIcons', () => {
  gulp.src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest('bin/static/fonts'))
    .pipe(connect.reload());
});

gulp.task('build', ['sass', 'copyImages', 'copyFontsAndIcons']);

gulp.task('clean', () => {
  return exec('rm -rf ./bin');
});

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.js', ['js']]);
  gulp.watch(['./src/styles/**/*.scss'], ['sass']);
  gulp.watch(['./src/assets/images/**/*'], ['copyImages']);
  gulp.watch(['./src/assets/fonts/**/*'], ['copyFontsAndIcons']);
});

gulp.task('default', ['clean', 'build', 'connect', 'watch']);
