const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const exec = require('child_process').execSync;
const proxyMiddleware  = require('http-proxy-middleware');
const Builder = require('systemjs-builder');
const handlebars = require('gulp-compile-handlebars');
const rename = require("gulp-rename");
const sassJspm = require('sass-jspm-importer');

var isProd = false;

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true,
    port: 3000,
    middleware: (connect, opts) => {
      return [
        connect().use(
          proxyMiddleware(['/v1'], {target: 'http://127.0.0.1:3001'})
        ),
        connect().use('/img', connect.static('./bin/static/img'))
      ];
    }
  });
});

gulp.task('template', () => {
  const templateData = { isProd };
  const indexStream = gulp.src('index.hbs')
    .pipe(handlebars(templateData))
    .pipe(rename('index.html'))

  if(isProd) {
    indexStream.pipe(gulp.dest('bin/static'));
  } else {
    indexStream.pipe(gulp.dest('./'));
  }
});

gulp.task('sass', () => {
  return gulp.src('src/styles/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      functions: sassJspm.resolve_function('/lib/'),
      importer: sassJspm.importer
    }))
    .pipe(gulp.dest('bin/static/css'))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('minifyJs', function() {
  var builder = new Builder('./', './config.js');

  builder
  .buildStatic('./src/app.js', './bin/static/js/app.js', {
    minify: true,
    sourceMaps: false,
    runtime: false
  });
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

gulp.task('setProd', () => {
  isProd = true;
});

gulp.task('clean', () => {
  return exec('rm -rf ./bin');
});

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.js'], ['js']);
  gulp.watch(['./src/styles/**/*.scss', './jspm_packages/npm/inuit-*/**/*.scss'], ['sass']);
  gulp.watch(['./src/assets/images/**/*'], ['copyImages']);
  gulp.watch(['./src/assets/fonts/**/*'], ['copyFontsAndIcons']);
});

gulp.task('build', [
  'clean',
  'sass',
  'template',
  'copyImages',
  'copyFontsAndIcons'
]);

gulp.task('buildProd', [
  'setProd',
  'build',
  'minifyJs'
]);

gulp.task('default', [
  'build',
  'connect',
  'watch'
]);
