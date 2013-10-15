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
      html5shiv: {
        files: {
          'assets/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv-printshiv.js'
        }
      },
      respond: {
        files: {
          'assets/js/respond.js': 'bower_components/respond/respond.src.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'uglify']);
};
