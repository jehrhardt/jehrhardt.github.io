module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less"],
          yuicompress: true
        },
        files: {
          '../assets/css/styles.css': 'less/styles.less'
        }
      }
    },
    uglify: {
      app: {
        files: {
          '../assets/js/app.js': ['js/twitter.js',
                                  'js/google-analytics.js',
                                  'js/disqus.js'],
          '../assets/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv-printshiv.js',
          '../assets/js/respond.js': 'bower_components/respond/src/respond.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'uglify']);
};
