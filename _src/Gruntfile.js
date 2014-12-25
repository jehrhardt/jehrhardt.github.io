module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less"]
        },
        files: {
          '../assets/css/styles.css': 'less/styles.less'
        }
      }
    },
    cssmin: {
      minify: {
        files: [{
          expand: true,
          cwd: '../assets/css/',
          src: ['*.css', '!*.min.css'],
          dest: '../assets/css/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      app: {
        files: {
          '../assets/js/app.js': ['js/twitter.js',
                                  'js/google-analytics.js',
                                  'js/disqus.js']
        }
      }
    },
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['bower:install', 'less', 'cssmin', 'uglify']);
};
