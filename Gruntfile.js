module.exports = function(grunt) {
  grunt.initConfig({});

  grunt.config('webpack', require('./grunt/webpack.js'));
  grunt.config('watch', require('./grunt/watch.js'));
  grunt.config('sass', require('./grunt/sass.js'));

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['webpack', 'sass:dist']);

  grunt.registerTask('serve', [
                                'webpack',
                                'sass:dist',
                                'watch'
                              ]);
};
