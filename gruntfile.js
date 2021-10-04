module.exports = function(grunt) {

  // Default port
  var LIVERELOAD_PORT = 35729;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

   
    watch: {
      options: {
         livereload: LIVERELOAD_PORT,
      },
      html: {
        files: ['*.html','**/*.css'],
        options: {
             livereload: LIVERELOAD_PORT
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          hostname: 'localhost',
          base: '.',
          livereload: LIVERELOAD_PORT
        }
      }
    }
  });

   
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['connect', 'watch']);
};