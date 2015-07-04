module.exports = {
  scripts: {
    files: ['app/**/*.jsx', 'app/**/*.js'],
    tasks: ['webpack']
  },
  sass: {
    files: ['styles/**/*.scss'],
    tasks:['sass:dist']
  },
  options: {
    livereload: true
  }
};
