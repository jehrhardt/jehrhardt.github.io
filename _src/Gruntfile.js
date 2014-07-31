module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less"],
          yuicompress: true
        },
        files: {
          'assets/css/styles.css': '_less/styles.less'
        }
      }
    },
    uglify: {
      app: {
        files: {
          'assets/js/app.js': ['_js/twitter.js',
                               '_js/google-analytics.js',
                               '_js/disqus.js'],
          'assets/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv-printshiv.js',
          'assets/js/respond.js': 'bower_components/respond/src/respond.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'uglify']);
};
