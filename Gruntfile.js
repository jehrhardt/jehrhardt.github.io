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
      fixIe: {
        files: {
          'assets/js/fix-ie.js': ['bower_components/html5shiv/dist/html5shiv-printshiv.js',
                                  'bower_components/respond/respond.src.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'uglify']);
};
