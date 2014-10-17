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
                                  'js/disqus.js'],
          '../assets/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv-printshiv.js',
          '../assets/js/respond.js': 'bower_components/respond/src/respond.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
};
