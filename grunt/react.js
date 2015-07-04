module.exports = {
  jsx: {
    files: [
      {
        expand: true,
        cwd: 'app',
        src: ['**/*.jsx', '**/*.js'],
        dest: 'public/js/build',
        ext: '.js'
      }
    ],
    options: {
      es6module: true
    }
  }
};
