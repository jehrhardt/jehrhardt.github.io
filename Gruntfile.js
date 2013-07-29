module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ['bower_components/bootstrap/less'],
          yuicompress: true
        },
        files: {
          'css/styles.css': 'less/styles.less'
        }
      }
    },
    uglify: {
      jquery: {
        files: {
          'js/jquery.js': 'bower_components/jquery/jquery.js'
        }
      },
      html5shiv: {
        files: {
          'js/html5shiv.js': 'bower_components/html5shiv/src/html5shiv-printshiv.js'
        }
      },
      bootstrap: {
        files: {
          'js/bootstrap.js': ['bower_components/bootstrap/js/collapse.js',
                              'bower_components/bootstrap/js/scrollspy.js',
                              'bower_components/bootstrap/js/button.js',
                              'bower_components/bootstrap/js/affix.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'uglify']);
};
